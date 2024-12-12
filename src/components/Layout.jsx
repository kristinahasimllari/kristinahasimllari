import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

// Define prop types
Layout.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is a React node
};

export default Layout;
