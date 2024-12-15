import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from "../layout/MainLayouts/components/MainLayout.jsx";
import Home from '../pages/Home/Home.jsx';
import About from '../pages/About/About.jsx';



const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> 
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
