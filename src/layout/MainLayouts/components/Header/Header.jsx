import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

const { header, navbar, logo, logoImg, navLinks, cartIcon } = classes;

const Header = () => {
  return (
    <header className={header}>
      <nav className={navbar}>
        <div className={logo}>
          <img 
            src="/src/assets/images/logoglowb.webp" 
            alt="GlowBalance Logo" 
            width="50" 
            height="60" 
            className={logoImg} 
          />
        </div>
        <ul className={navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li>
            <Link to="/cart">
              {/* SVG Cart Icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={cartIcon}
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h10.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
