import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../screens/Home';

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;

