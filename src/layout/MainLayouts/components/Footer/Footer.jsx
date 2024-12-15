import classes from './Footer.module.scss';

const {footer} = classes;


const Footer = () => {
  return (
    <footer className={footer}>
      <p>© Glow Balance 2024 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
