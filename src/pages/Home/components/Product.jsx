import PropTypes from 'prop-types';
import classes from './Product.module.scss';

const { product, productCard, productImage } = classes;

const Product = ({ products, onProductClick }) => {
  return (
    <div className={product}>
      {products.map((product) => (
        <div
          className={productCard}
          key={product.id}
          onClick={() => onProductClick(product.id)}
          style={{ cursor: 'pointer' }}
        >
          <img src={product.image} alt={product.name} className={productImage} />
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <p>{product.reviews} Reviews</p>
        </div>
      ))}
    </div>
  );
};

Product.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      reviews: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      category: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default Product;
