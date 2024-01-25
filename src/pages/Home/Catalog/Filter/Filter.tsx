
import "./filter.scss";
// import ReactSlider from 'react-slider'
import { cardItem } from "../../../../models";

import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { priceChange } from "../../../../redux/slices/catalogClise";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";





const Filter = () => {
    const dispatch = useDispatch();
    const[value, setValue] = useState('');
    const[min, setMin] = useState(0);
    const[max, setMax] = useState(0);

    const fetchPriceHandle = useCallback(async() => {
      try {
        const { data } = await axios.get<cardItem[]>("https://652cdf7ad0d1df5273efc824.mockapi.io/greenShop");

        let max = 0;
        data.map(item => (item.price - (item.price * item.sale) / 100) > max ? max = (item.price - (item.price * item.sale) / 100) : null)
        setMax(max);

        let min = data[0].price - (data[0].price * data[0].sale) / 100;
        data.map(item => (item.price - (item.price * item.sale) / 100) < max ? max = (item.price - (item.price * item.sale) / 100) : null)
        setMin(min)

      } catch (error) {
        console.warn(error);
      }
    }, [])
  
    useEffect(() => {
      fetchPriceHandle();
    },[fetchPriceHandle]);


    const changePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      dispatch(priceChange(Number(e.target.value)));
    }
  

  return (
    <div className="filter">
      <ul className="filter__list">
        <li className="filter__item">

          <div className="filter-price">
            <input type="range" id="vol" name="vol" defaultValue={0} min={min} max={max} onChange={changePrice} />
            <div className="filter-price__value">{value && `from ${value} € to ${max} €`}</div>
            <div className="filter-price__prices">
              <span>{min} €</span>
              <span>{max} €</span>
            </div>
          </div>

          

        </li>
      </ul>

      <div className="filter__banner">
        <Link to="/" className="filter__link" style={{backgroundImage: `url('images/banner.png')`}}></Link>
      </div>
      
    </div>

  );
};

export default Filter;
