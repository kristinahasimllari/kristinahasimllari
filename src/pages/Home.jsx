import '../styles/Home.css';

const Home = () => {
  const products = [
    { id: 1, name: 'Fenty', price: 50.99, reviews: 892, image: 'src/assets/images/skincare1.webp' },
    { id: 2, name: 'Noni', price: 30.99, reviews: 1293, image: 'src/assets/images/skincare2.webp' },
    { id: 3, name: 'The Ordinary', price: 40.99, reviews: 942, image: 'src/assets/images/skincare3.webp' },
  ];

  return (
    <div className="home">
      <aside className="filters">
        <h3>Filters</h3>
        <div className="filter-category">
          <ul>
            <li><input type="checkbox" id="skin-care" /> <label htmlFor="skin-care">Skin Care</label></li>
            <li><input type="checkbox" id="hair-care" /> <label htmlFor="hair-care">Hair Care</label></li>
          </ul>
        </div>
      </aside>

      <section className="product-section">
        <header className="banner">
          <h1>Natural Beauty Skincare</h1>
          <p>
            Experience a luxurious skincare solution meticulously designed to nourish, 
            protect, and enhance the natural beauty of every skin.
          </p>
        </header>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <p>{product.reviews} Reviews</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
