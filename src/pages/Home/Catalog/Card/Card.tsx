import { cardItem } from "../../../../models";
import "./card.scss";

type Props = {
  item: cardItem;
};

const Card: React.FC<Props> = ({ item }) => {
  return (
    <article className="card">
      <div className="card__photo">
        <img className="card__image" src={item.image} alt={item.title} />
      </div>
      <span className="card__title">{item.title}</span>
      <div className="card__price">
        <div className="card__new-price">
          {item.sale > 1
            ? new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(item.price - (item.price * item.sale) / 100)
            : null}
        </div>
        <div className={`card__old-price ${item.sale > 1 ? 'card__old-price-line' : ''}`}>
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(item.price)}
        </div>
      </div>
      {item.new && <div className="card__new">new</div>}
      {item.sale > 1 && <div className="card__sale">{`-${item.sale}%`}</div>}
    </article>
  );
};

export default Card;
