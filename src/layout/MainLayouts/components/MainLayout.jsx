import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Outlet } from "react-router-dom";
import classes from './MainLayout.module.scss';

const { layout} = classes;

const MainLayout = () => {
  return (
    <div className={layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
