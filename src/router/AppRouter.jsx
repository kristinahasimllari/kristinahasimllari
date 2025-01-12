import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "../layout/MainLayouts/components/MainLayout.jsx";
import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About.jsx';
import ProductDetails from '../pages/Home/ProductDetails.jsx'; // Import the ProductDetails page

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
