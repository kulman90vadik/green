import { useState } from "react";
import { categoryChange } from "../../../../redux/slices/catalogClise";
import { useDispatch } from "react-redux";
import './sorting.scss';

const Sorting = () => {
  const dispatch = useDispatch();
  let sortingCategory = ["All Plants", "Sale", "New Arrivals"];

  let sortingPrice: { title: string; id: string }[] = [
    { title: "Price", id: "" },
    { title: "Ascending", id: "asc" },
    { title: "Descending", id: "desc" },
  ];
  const [count, setCount] = useState(0);

  const handleSort = (index: number) => {
    setCount(index); 
    dispatch(categoryChange(index))
  }

  return (
    <div className="sorting">

      <ul className="sorting-category__list">
        {sortingCategory.map((item, index) => {
          return (
            <li className="sorting-category__item">
              <button className={`${count === index ? 'btn-reset sorting-category__btn sorting-category__btn--active' : 'sorting-category__btn btn-reset'}`} type="button" onClick={() => handleSort(index)}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="sorting-price">
        <button className='btn-reset sorting-price__btn' type="button">
          {sortingPrice[0].title}
        </button>
        <ul className="sorting-price__list">
        {sortingPrice.map((item) => {
            return (
              <li className="sorting-price__item" key={item.title}>
                {item.title}
              </li>
            );
          })}
          </ul>
      </div>  

    </div>
  );
};

export default Sorting;
