import classes from './Filters.module.scss';

const { filterContainer, filterItem } = classes;

const Filters = () => {
  return (
    <div className={filterContainer}>
      <h3>Filters</h3>
      <ul>
        <li className={filterItem}>
          <input type="checkbox" id="skin-care" />
          <label htmlFor="skin-care">Skin Care</label>
        </li>
        <li className={filterItem}>
          <input type="checkbox" id="hair-care" />
          <label htmlFor="hair-care">Hair Care</label>
        </li>
      </ul>
    </div>
  );
};

export default Filters;
