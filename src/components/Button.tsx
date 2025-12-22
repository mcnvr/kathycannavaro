import './Button.css'

interface ButtonProps {
  text: string;
  variant?: 'white' | 'black';
  href?: string;
}

function Button({ text, variant = 'white', href }: ButtonProps) {
  const className = `btn ${variant === 'black' ? 'btn-black' : 'btn-white'}`;
  
  const handleClick = (e: React.MouseEvent) => {
    // Handle scroll links (starting with # but not #/)
    if (href && href.startsWith('#') && !href.startsWith('#/')) {
      e.preventDefault();
      const elementId = href.slice(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  if (href) {
    return (
      <a href={href} onClick={handleClick} className={className}>
        {text}
      </a>
    );
  }
  
  return (
    <button className={className}>
      {text}
    </button>
  )
}

export default Button

