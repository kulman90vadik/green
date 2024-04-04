import { cardItem } from '../../../models'
import '../basket.scss'
import { useDispatch } from 'react-redux'
import {delCartBasket,delPrice,	minusTotalPrice,plusTotalPrice} from '../../../redux/slices/basketClise'
import { btnChange } from '../../../redux/slices/catalogClise'
import Counter from '../Counter/Counter'
import { useEffect, useRef, useState } from 'react'
import { RootState } from '../../../redux/store'
import { useSelector } from 'react-redux'
import { getLocalStBasket } from '../../../utils/getLocalStBasket'

type BasketProps = {
	obj: cardItem
}

const BasketItem: React.FC<BasketProps> = ({ obj }) => {
	const basket: cardItem[] = useSelector((state: RootState) => state.basket.basket)
	const dispatch = useDispatch()
	const [count, setCount] = useState(obj.counter)
	const isMounted = useRef(false);


// useEffect(() => {
// 	const basketlo: cardItem[] = getLocalStBasket()
// 	let id = basketlo.map((item) => {
// 		if(obj.id === item.id) {
// 			console.log(item.counter);
// 			return item.counter
// 		}	
// 	})
// 	// console.log(id);
// }, [basket, count])


// useEffect(() => {
	// if (isMounted.current) {

		let newArr = basket.map((item: cardItem) => {
			if(item.id === obj.id) { return {...item, counter: count}}
			else { return item}
		})
		const json = JSON.stringify(newArr);
		localStorage.setItem("cart", json)
	// }
	// isMounted.current = true;
// }, [basket, count]);



	let limit = 1
	const decrement = (obj: cardItem) => {
		if (count > limit) {
			setCount(prev => prev - 1)
			dispatch(minusTotalPrice(obj))
		}
	}
	const increment = (obj: cardItem) => {
		dispatch(plusTotalPrice(obj))
		setCount(prev => prev + 1)
	}

	const delCart = (obj: cardItem, priceItem: number) => {
		dispatch(delCartBasket({ ...obj, sizesCount: 0 }))
		dispatch(btnChange(obj))
		dispatch(delPrice(priceItem))
	}

	return (
		<li className='basket-cards__item'>
			<div className='basket-cards__photo basket-cards__col'>
				<img className='basket-cards__image' src={obj.image} alt={obj.title} />
				<span className='basket-cards__title'>{obj.title}</span>
			</div>
			<span className='basket-cards__price basket-cards__col'>
				{new Intl.NumberFormat('de-DE', {
					style: 'currency',
					currency: 'EUR'
				}).format(obj.price - (obj.price * obj.sale) / 100)}
			</span>

{/* React.useMemo(() => {

}, []) */}
			<Counter
				decrement={() => decrement(obj)}
				increment={() => increment(obj)}
				count={count}
				// objId={obj.id}
			/>

			<span className='basket-cards__total basket-cards__col'>
				{new Intl.NumberFormat('de-DE', {
					style: 'currency',
					currency: 'EUR'
				}).format((obj.price - (obj.price * obj.sale) / 100) * count)}
			</span>

			<ul className='basket-cards__col basket-cards__list'>
				{obj.sizes.map((item, index) => (
					<li
						className={`basket-cards__size ${
							obj.sizesCount === index ? 'basket-cards__size--active' : ''
						}`}
						key={item}
					>
						{item}
					</li>
				))}
			</ul>
			<div className='basket-cards__col'>
				<button
					className='basket-cards__btn btn-reset'
					type='button'
					onClick={() =>
						delCart(obj, (obj.price - (obj.price * obj.sale) / 100) * count)
					}
				>
					<svg
						className='basket-cards__icon'
						width='19'
						height='21'
						viewBox='0 0 19 21'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M15.8892 8.55408C15.8892 16.5731 17.0435 20.1979 9.27967 20.1979C1.5149 20.1979 2.693 16.5731 2.693 8.55408'
							stroke='#727272'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M17.3651 5.47979H1.2146'
							stroke='#727272'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M12.7148 5.47979C12.7148 5.47979 13.2434 1.71408 9.28911 1.71408C5.33578 1.71408 5.86435 5.47979 5.86435 5.47979'
							stroke='#727272'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</button>
			</div>
		</li>
	)
}

export default BasketItem
