import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { cardItem } from "../../models";
import './favorites.scss'

const Favorites = () => {

  const favorites: cardItem[] = useSelector((state: RootState) => state.favorites.favorites)


console.log(favorites);

  return (
    <section className="favorites">
      {favorites.map(item => <div key={item.id}>{item.title}</div>)}
    </section>
  );
}
 
export default Favorites;