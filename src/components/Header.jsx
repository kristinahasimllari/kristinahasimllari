import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
      <div className="logo">
          <img 
            src="/src/assets/images/logo.png" 
            alt="GlowBalance Logo"   width="150" 
            height="60"
            className="logo-img" 
          />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
