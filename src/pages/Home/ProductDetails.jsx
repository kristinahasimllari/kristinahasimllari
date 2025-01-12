import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './ProductDetails.module.scss';

const ProductDetails = () => {
  const { id } = useParams(); // Extract the product ID from the route parameters
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://676c1590bc36a202bb86a8e0.mockapi.io/api/v1/products/${id}`
        ); 
        if (!response.ok) {
          throw new Error('Failed to fetch product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError(error.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Loading product details...</p>;

  return (
    <div className={classes.productDetails}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className={classes.productImage} />
      <p>
        <strong>Price:</strong> ${parseFloat(product.price).toFixed(2)}
      </p>
      <p>
        <strong>Reviews:</strong> {product.reviews}
      </p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
    </div>
  );
};

export default ProductDetails;
