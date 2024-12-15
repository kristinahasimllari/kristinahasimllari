import classes from './About.module.scss';

const { aboutUs, header,imageSection,missionSection, whyChooseUsSection } = classes;

const AboutUs = () => {
  return (
    <div className={aboutUs}>
      <header className={header}>
        <h1>About Us</h1>
        <p>
          Welcome to our world of natural beauty! We bring you carefully curated
          skincare and haircare solutions from K-Beauty to enhance your
          natural glow.
        </p>
      </header>
      <section className={missionSection}>
        <h2>Our Mission</h2>
        <p>
          Our mission is to empower individuals to embrace their natural beauty
          through innovative, effective, and environmentally-conscious products.
        </p>
      </section>
      <section className={whyChooseUsSection}>
        <h2>Why Choose Us</h2>
        <ul>
          <li>
            <strong>Premium Ingredients:</strong> We source the finest,
            natural, and sustainable ingredients for maximum efficacy.
          </li>
          <li>
            <strong>Customer-Centric:</strong> We prioritize your satisfaction
            with unparalleled support and service.
          </li>
          <li>
            <strong>Innovative Solutions:</strong> Our team is committed to
            bringing the latest advancements in K-Beauty directly to you.
          </li>
          <li>
            <strong>Eco-Friendly:</strong> We take conscious steps to ensure
            our products and packaging are kind to the planet.
          </li>
        </ul>
      </section>
      <section className={imageSection}>
        <img src="src/assets/images/logoglowb.webp" alt="Our Logo" />
      </section>
    </div>
  );
};

export default AboutUs;
