import { useCallback, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { cardItem } from "../../models";
import "./pageItem.scss";
import "./Sizes/sizes.scss";

import axios from "axios";
import SliderImage from "./SliderImage/SliderImage";
import { useDispatch } from "react-redux";
import { btnChange } from "../../redux/slices/catalogClise";
import { addToBasket } from "../../redux/slices/basketClise";
import Sizes from "./Sizes/Sizes";

const PageItem: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const { id } = useParams();
  const dispatch = useDispatch();

  const [btnColor, setBtnColor] = useState(state.btn);
  const [cardItem, setCardItem] = useState<cardItem>();
  const [loading, setLoading] = useState("");
  // const [countSize, setCountSize] = useState<number>(0);
  const [countSize, setCountSize] = useState<number>(0);

  const fetchCart = useCallback(async () => {
    setLoading("loading");
    try {
      const { data } = await axios<cardItem>("https://652cdf7ad0d1df5273efc824.mockapi.io/greenShop/" + id);
      setCardItem(data);
      setLoading("play");
    } catch (error) {
      setLoading("error");
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);


  const btnChangePage = (obj: cardItem) => {
    dispatch(btnChange(obj)); // изменение кнопки в home
    // dispatch(addToBasket(obj)); // добавление - удaление в корзину
    dispatch(addToBasket({...obj, sizesCount: countSize})); // добавление - удaление в корзину
    setBtnColor(!btnColor); // изменение кнопки в pageItem
  };

  return (
    <section className="page-item">
      {loading === "loading" ? (
        <p className="message">Loading...</p>
      ) : cardItem ? (
        <div className="page-item__container">
          <article className="page-item__article">
            <SliderImage
              images={cardItem.images}
              image={cardItem.image}
              title={cardItem.title}
            />

            <div className="page-item__info">
              <span className="page-item__title">{cardItem.title}</span>
              <span className="page-item__price">
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(cardItem.price)}
              </span>
              <div className="page-item__desc">{cardItem.description}</div>

              <Sizes sizes={cardItem.sizes} setCountSize={setCountSize} />

              <button
                className={`btn-reset page-item__btn ${
                  btnColor ? "page-item__btn--active" : ""
                }`}
                onClick={() => btnChangePage(cardItem)}
                type="button"
              >
                ADD
              </button>
            </div>
          </article>
        </div>
      ) : (
        <p className="message">Try later .🤔</p>
      )}
    </section>
  );
};

export default PageItem;
