import { useSelector } from 'react-redux'
import { cardItem } from '../../../models'
import { RootState } from '../../../redux/store'
import './counter.scss'
import { useEffect } from 'react'

type Props = {
	count: number
	objId: number
	increment: () => void
	decrement: () => void
}


const Counter: React.FC<Props> = ({ decrement, increment, count, objId }) => {

	// let data = localStorage.getItem('cart');
	// let ob = data ? JSON.parse(data) : [];
	const basket: cardItem[] = useSelector((state: RootState) => state.basket.basket)

	useEffect(() => {
		let newArr = basket.map((item: cardItem) => {
			if(item.id === objId) { return {...item, counter: count}}
			else { return item}
		})
	
		const json = JSON.stringify(newArr);
		localStorage.setItem("newBasket", json);
	}, [count])

	// console.log(newArr);

	return (
		<>
			<div className='basket-cards__col basket-cards__counter'>
				<div className='counter'>
					<button
						className='counter__btn btn-reset'
						type='button'
						onClick={decrement}
					>
						-
					</button>
					<button className='counter__number btn-reset' type='button'>
						{count}
					</button>
					<button
						className='counter__btn btn-reset'
						type='button'
						onClick={increment}
					>
						+
					</button>
				</div>
			</div>
		</>
	)
}

export default Counter
