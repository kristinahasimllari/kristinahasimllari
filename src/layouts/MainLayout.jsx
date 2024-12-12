import { Link } from 'react-router-dom';
import './Navbar.css'; // Custom CSS

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <header className="header">
        <div className="logo">ME-NN-ING</div>
        <nav>
          <ul className="navbar">
            <li><Link to="/skincare">Skincare</Link></li>
            <li><Link to="/body-hair">Body & Hair</Link></li>
            <li><Link to="/gifting">Gifting</Link></li>
            <li><Link to="/skin-quiz">Skin Quiz</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="footer">© 2024 ME-NN-ING. All Rights Reserved.</footer>
    </div>
  );
};

export default Layout;
