import PropTypes from 'prop-types';
import classes from './Filters.module.scss';

const { filterContainer, filterItem } = classes;

const Filters = ({ onFilterChange }) => {
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    onFilterChange(id, checked);
  };

  return (
    <div className={filterContainer}>
      <h3>Filters</h3>
      <ul>
        <li className={filterItem}>
          <input type="checkbox" id="skin-care" onChange={handleCheckboxChange} />
          <label htmlFor="skin-care">Skin Care</label>
        </li>
        <li className={filterItem}>
          <input type="checkbox" id="hair-care" onChange={handleCheckboxChange} />
          <label htmlFor="hair-care">Hair Care</label>
        </li>
      </ul>
    </div>
  );
};

Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filters;
