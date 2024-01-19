import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { cardItem } from "../../models";


const Basket = () => {

  const basket: cardItem[] = useSelector((state: RootState) => state.basket.basket);
  console.log(basket);

  return (

    <section>
      {basket.map(obj => {
        return(
          <>
          {obj.title}
          
          </>
        )
      })}
    </section>

  );
}
 
export default Basket;