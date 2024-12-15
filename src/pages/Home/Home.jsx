import classes from './Home.module.scss';
import Product from './components/Product';
import Filters from './components/Filters';

const { home, filters, productSection, banner } = classes;
const Home = () => {
  const products = [
    { id: 1, name: 'Anua', price: 50.99, reviews: 892, image: 'src/assets/images/anua.webp' },
    { id: 2, name: 'Centella', price: 30.99, reviews: 1293, image: 'src/assets/images/centellap.jpg' },
    { id: 3, name: 'Set', price: 40.99, reviews: 942, image: 'src/assets/images/set.jpg' },
    { id: 4, name: 'Hair set', price: 40.99, reviews: 942, image: 'src/assets/images/hairset.jpg' },
    { id: 5, name: 'Toner', price: 40.99, reviews: 942, image: 'src/assets/images/tonic.jpg' },

  ];

  return (
    <div className={home}>
      <section className={productSection}>
        <header className={banner}>
          <h1>Natural Beauty Skincare</h1>
          <p>
            Experience a luxurious skincare solution meticulously designed to
            nourish, protect, and enhance the natural beauty of every skin.
          </p>
        </header>

        <aside className={filters}>
      <Filters/>
      </aside>
        <Product products={products} />
      </section>
    </div>
  );
};

export default Home;
