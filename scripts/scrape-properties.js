import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const KW_URL = 'https://kcannavaro.kw.com/';
const OUTPUT_DIR = path.join(__dirname, '..', 'data');
const OUTPUT_FILE = 'properties.json';

async function scrapeProperties() {
  console.log(`Fetching properties from ${KW_URL}`);
  
  // Launch browser with settings optimized for bypassing bot detection
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1920x1080'
    ]
  });

  try {
    const page = await browser.newPage();
    
    // Set a realistic user agent
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
    
    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 });
    
    // Set extra HTTP headers
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
    });

    console.log('Navigating to page...');
    
    // Navigate and wait for network to be idle
    await page.goto(KW_URL, { 
      waitUntil: 'networkidle2',
      timeout: 60000 
    });

    // Wait for potential Cloudflare challenge to resolve
    console.log('Waiting for page to fully load...');
    await page.waitForFunction(
      () => !document.title.includes('Just a moment'),
      { timeout: 30000 }
    ).catch(() => {
      console.log('Cloudflare challenge may still be present');
    });

    // Additional wait for dynamic content
    await new Promise(resolve => setTimeout(resolve, 5000));

    // Check page title
    const title = await page.title();
    console.log('Page title:', title);

    // Wait for listing cards
    try {
      await page.waitForSelector('kw-listing-card', { timeout: 10000 });
      const count = await page.$$eval('kw-listing-card', els => els.length);
      console.log(`Found ${count} kw-listing-card elements`);
    } catch (e) {
      console.log('kw-listing-card not found, trying alternatives...');
    }

    // Extract properties using page.evaluate to run in browser context
    const properties = await page.evaluate(() => {
      const results = [];
      
      // Get all listing cards
      const cards = document.querySelectorAll('kw-listing-card');
      
      cards.forEach((card, index) => {
        try {
          // ===== EXTRACT PRICE =====
          let price = '';
          
          // Method 1: Try price-amount attribute on the card
          const priceAmount = card.getAttribute('price-amount');
          if (priceAmount) {
            const num = parseFloat(priceAmount);
            price = '$' + num.toLocaleString('en-US', { maximumFractionDigits: 0 });
          }
          
          // Method 2: Look for kw-listing-pills element which contains the price
          if (!price) {
            const pillsEl = card.querySelector('kw-listing-pills');
            if (pillsEl) {
              const pillsText = pillsEl.textContent;
              const priceMatch = pillsText.match(/\$?([\d,]+)/);
              if (priceMatch) {
                const numStr = priceMatch[1].replace(/,/g, '');
                const num = parseInt(numStr);
                if (num > 10000) { // Likely a price, not something else
                  price = '$' + num.toLocaleString('en-US');
                }
              }
            }
          }
          
          // Method 3: Look in card text for price pattern
          if (!price) {
            const cardText = card.textContent;
            const priceMatch = cardText.match(/\$\s*([\d,]+)/);
            if (priceMatch) {
              const numStr = priceMatch[1].replace(/,/g, '');
              const num = parseInt(numStr);
              if (num > 10000) {
                price = '$' + num.toLocaleString('en-US');
              }
            }
          }

          // ===== EXTRACT ADDRESS =====
          let address = '';
          
          // Method 1: PropertyAddress class
          const addressEl = card.querySelector('.PropertyAddress');
          if (addressEl) {
            address = addressEl.textContent.trim();
          }
          
          // Method 2: Look for address pattern in text
          if (!address) {
            const cardText = card.textContent;
            // Match typical address: number + street name + city, state ZIP
            const addressMatch = cardText.match(/(\d+[^$\d]*(?:Street|St|Avenue|Ave|Road|Rd|Drive|Dr|Lane|Ln|Boulevard|Blvd|Way|Circle|Cir|Court|Ct|Place|Pl)[^,]*,\s*[A-Za-z\s]+,\s*[A-Z]{2}\s*\d{5})/i);
            if (addressMatch) {
              address = addressMatch[1].trim();
            }
          }
          
          // Clean up address - remove any dollar amounts that might have been captured
          address = address.replace(/\$[\d,]+/g, '').trim();

          // ===== EXTRACT LINK =====
          let link = '';
          const linkEl = card.querySelector('a[href*="/property/"]');
          if (linkEl) {
            link = linkEl.getAttribute('href');
            if (link && !link.startsWith('http')) {
              link = 'https://kcannavaro.kw.com' + link;
            }
          }
          if (!link) {
            const anyLink = card.querySelector('a[href]');
            if (anyLink) {
              link = anyLink.getAttribute('href');
              if (link && !link.startsWith('http')) {
                link = link.startsWith('/') ? 'https://kcannavaro.kw.com' + link : link;
              }
            }
          }

          // ===== EXTRACT IMAGE =====
          // The carousel uses Swiper which reorders slides in DOM
          // We need to find the slide with data-swiper-slide-index="0" for the first image
          let image = '';
          
          // Method 1: Find the first slide (index 0) in the Swiper carousel
          const firstSlide = card.querySelector('[data-swiper-slide-index="0"]');
          if (firstSlide) {
            const imgEl = firstSlide.querySelector('img');
            if (imgEl) {
              image = imgEl.getAttribute('src') || imgEl.getAttribute('srcset')?.split(' ')[0] || '';
            }
            // Also check for source element in picture tag
            if (!image) {
              const sourceEl = firstSlide.querySelector('source[srcset]');
              if (sourceEl) {
                image = sourceEl.getAttribute('srcset')?.split(' ')[0] || '';
              }
            }
          }
          
          // Method 2: Fallback - look for ImageCarousel and get first indexed image
          if (!image) {
            const carousel = card.querySelector('.ImageCarousel');
            if (carousel) {
              const firstSlideAlt = carousel.querySelector('.ImageCarousel-slide[data-swiper-slide-index="0"]');
              if (firstSlideAlt) {
                const imgEl = firstSlideAlt.querySelector('img');
                if (imgEl) {
                  image = imgEl.getAttribute('src') || imgEl.getAttribute('srcset')?.split(' ')[0] || '';
                }
              }
            }
          }
          
          // Method 3: Ultimate fallback - just get any image
          if (!image) {
            const imgEl = card.querySelector('img[src]');
            if (imgEl) {
              image = imgEl.getAttribute('src') || '';
            }
          }
          
          // Normalize the image URL
          if (image && !image.startsWith('http')) {
            if (image.startsWith('//')) image = 'https:' + image;
            else if (image.startsWith('/')) image = 'https://kcannavaro.kw.com' + image;
          }

          // ===== EXTRACT BEDS, BATHS, SQFT =====
          let beds = null, baths = null, sqft = null;
          
          // Look for PropertyFacets
          const facets = card.querySelectorAll('.PropertyFacets-facet');
          facets.forEach(facet => {
            const text = facet.textContent.toLowerCase();
            const boldEl = facet.querySelector('.PropertyFacets-facet-boldValue');
            const value = boldEl ? boldEl.textContent.trim() : '';
            
            if (text.includes('bd')) {
              beds = parseInt(value) || null;
            } else if (text.includes('ba')) {
              baths = parseFloat(value) || null;
            } else if (text.includes('sq')) {
              const sqftNum = value.replace(/,/g, '');
              if (sqftNum) sqft = parseInt(sqftNum).toLocaleString() + ' sq ft';
            }
          });
          
          // Fallback: extract from card text
          if (beds === null || baths === null || sqft === null) {
            const cardText = card.textContent;
            
            if (beds === null) {
              const bedsMatch = cardText.match(/(\d+)\s*(?:bd|bed)/i);
              if (bedsMatch) beds = parseInt(bedsMatch[1]);
            }
            
            if (baths === null) {
              const bathsMatch = cardText.match(/(\d+(?:\.\d+)?)\s*(?:ba)/i);
              if (bathsMatch) baths = parseFloat(bathsMatch[1]);
            }
            
            if (sqft === null) {
              const sqftMatch = cardText.match(/([\d,]+)\s*(?:sq|sqft)/i);
              if (sqftMatch) {
                const sqftNum = sqftMatch[1].replace(/,/g, '');
                sqft = parseInt(sqftNum).toLocaleString() + ' sq ft';
              }
            }
          }

          // Only add if we have meaningful data
          if (price || address) {
            results.push({
              id: `property-${index + 1}`,
              price: price || 'Price upon request',
              address: address || 'Address not available',
              beds,
              baths,
              sqft,
              image,
              link: link || 'https://kcannavaro.kw.com/',
              listingAgent: 'Kathy Cannavaro'
            });
          }
        } catch (err) {
          console.error(`Error parsing card ${index}:`, err);
        }
      });

      return results;
    });

    console.log(`\nExtracted ${properties.length} properties`);

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Write results
    const data = {
      lastUpdated: new Date().toISOString(),
      properties: properties.slice(0, 10) // Limit to 10 properties
    };

    const outputPath = path.join(OUTPUT_DIR, OUTPUT_FILE);
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));

    console.log(`\n✓ Successfully scraped ${properties.length} properties`);
    console.log(`✓ Data saved to ${outputPath}`);

    if (properties.length > 0) {
      console.log('\nSample property:');
      console.log(JSON.stringify(properties[0], null, 2));
    }

    return data;

  } catch (error) {
    console.error('Error during scraping:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Run the scraper
scrapeProperties()
  .then(() => {
    console.log('\n✓ Scraping completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n✗ Scraping failed:', error.message);
    process.exit(1);
  });

export { scrapeProperties };
