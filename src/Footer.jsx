import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me on:</p>
      <div className="social-links">
        {/* Add your social media links here */}
        <a href="https://github.com/eduardodfran" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/eduardo-fran-79a271253/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;