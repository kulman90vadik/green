
import Cards from './Cards/Cards';
import Filter from './Filter/Filter';
import './catalog.scss';

const Catalog = () => {

  return (
    <div className="catalog">
      <div className="catalog__container">

        <Filter />
        <Cards />

      </div>
    </div>
  );
}
 
export default Catalog;