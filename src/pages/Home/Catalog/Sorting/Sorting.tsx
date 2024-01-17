import { useState } from "react";
import { categoryChange, sortChange } from "../../../../redux/slices/catalogClise";
import { useDispatch } from "react-redux";
import './sorting.scss';

const Sorting = () => {
  const dispatch = useDispatch();
  let sortingCategory = ["All Plants", "Sale", "New Arrivals"];
  const[open, setOpen] = useState(false);

  let sortingPrice: { title: string; id: string }[] = [
    { title: "Price", id: "" },
    { title: "Ascending", id: "asc" },
    { title: "Descending", id: "desc" },
  ];
  const [count, setCount] = useState(0);
  const [priceCount, setPriceCount] = useState(0);

  const handleSort = (index: number) => {
    setCount(index); 
    dispatch(categoryChange(index))
  }
  
  const clickItemPrice = (id: string, index: number) => {
    setOpen(false);
    setPriceCount(index);
    dispatch(sortChange(id))
  }


  return (
    <div className="sorting">

      <ul className="sorting-category__list">
        {sortingCategory.map((item, index) => {
          return (
            <li className="sorting-category__item" key={item}>
              <button className={`${count === index ? 'btn-reset sorting-category__btn sorting-category__btn--active' : 'sorting-category__btn btn-reset'}`} type="button" onClick={() => handleSort(index)}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>


      <div className="sorting-price">
        <button className='btn-reset sorting-price__btn' type="button" onClick={() => setOpen(!open)}>
          {sortingPrice[priceCount].title}
          <svg
                className={`sorting-price__svg ${
                  open ? "sorting-price__svg--active" : ""
                }`}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></path>
              </svg>
        </button>
        <ul className="sorting-price__list" style={{ maxHeight: open ? "500px" : "0px" }} >
        {sortingPrice.map((item, index) => {
            return (
              <li className="sorting-price__item" key={item.title} onClick={() => clickItemPrice(item.id, index)}>
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
