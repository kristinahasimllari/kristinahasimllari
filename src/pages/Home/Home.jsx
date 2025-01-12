import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './Home.module.scss';
import Product from './components/Product';
import Filters from './components/Filters';

const { home, filters, productSection, banner } = classes;

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const navigate = useNavigate();

  // Fetch products from MockAPI
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://676c1590bc36a202bb86a8e0.mockapi.io/api/v1/products'); // Replace with your MockAPI endpoint
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (filter, isChecked) => {
    let updatedFilters = [...selectedFilters];
    if (isChecked) {
      updatedFilters.push(filter);
    } else {
      updatedFilters = updatedFilters.filter((f) => f !== filter);
    }

    setSelectedFilters(updatedFilters);

    if (updatedFilters.length === 0) {
      setFilteredProducts(products);
    } else {
      const newFilteredProducts = products.filter((product) =>
        updatedFilters.includes(product.category)
      );
      setFilteredProducts(newFilteredProducts);
    }
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={home}>
      <section className={productSection}>
        <header className={banner}>
          <h1>Natural Beauty Skin & Hair Care</h1>
          <p>
            Experience a luxurious hair and skincare solution meticulously designed to nourish,
            protect, and enhance the natural beauty of your hair and skin.
          </p>
        </header>

        <aside className={filters}>
          <Filters onFilterChange={handleFilterChange} />
        </aside>
        <Product products={filteredProducts} onProductClick={handleProductClick} />
      </section>
    </div>
  );
};

export default Home;
