import { useSelector } from 'react-redux';
import './cards.scss';
import { RootState } from '../../../../redux/store';
import { cardItem } from '../../../../models';
import Card from '../Card/Card';
import Loader from '../../../../Loader/Loader';
import Sorting from '../Sorting/Sorting';
import Pagination from '../../../../components/Pagination/Pagination';


const Cards = () => {
  const search: string = useSelector((state: RootState) => state.search.search);
  const catalog: cardItem[] = useSelector((state: RootState) => state.catalog.catalog);
  const price: number = useSelector((state: RootState) => state.catalog.price);
  const status = useSelector((state: RootState) => state.catalog.status);

// console.log(catalog)
  

  return (
    <div className="cards">

      <Sorting />

      <ul className="cards__list">
          <>
            {status === "error" ? (
              <div className="cards__error">
                <span>There was an error receiving goods.</span>
                <p>Please try again later</p>
                <div>&#128554;</div>
              </div>
            ) : status === "loading" ? (
              [...Array(10)].map((_, i) => <Loader key={i} />)
            ) : (
              catalog
                .filter(item => price <= (item.price - (item.price * item.sale) / 100))

                .filter((item: cardItem) => {
                  return item.title.toLowerCase().includes(search.toLowerCase());
                })
                .map((item: cardItem) => {
                  return (
                    <li className='cards__item' key={item.id}><Card item={item} key={item.id} /></li>
                  )
                })
            )}
          </>
      </ul>

      <Pagination />      

    </div>
  );
}
 
export default Cards;