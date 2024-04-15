import { useSelector } from 'react-redux'
import { cardItem } from '../../models'
import './basket.scss'

import BasketItem from './BasketItem/BasketItem'
import { RootState } from '../../redux/store'

const Shop = () => {
	const totalPrice: number = useSelector(
		(state: RootState) => state.basket.totalPrice
	)
	const basket: cardItem[] = useSelector(
		(state: RootState) => state.basket.basket
	)

console.log(basket)

	return (
		<section className='basket'>
			<div className='basket__container'>
				{basket.length > 0 ? (
					<>
						<div className='basket__left'>
							<div className='basket__top'>
								<div className='basket__top-item'>Products</div>
								<div className='basket__top-item'>Price</div>
								<div className='basket__top-item'>Quantity</div>
								<div className='basket__top-item'>Total</div>
								<div className='basket__top-item'>Sizes</div>
								<div className='basket__top-item'></div>
							</div>
							<ul className='basket-cards'>

								{basket.map((item: cardItem) => {
									return <BasketItem key={item.id} obj={item} />
								})}
								
							</ul>
						</div>

						<div className='basket__right'>
							{new Intl.NumberFormat('de-DE', {
								style: 'currency',
								currency: 'EUR'
							}).format(totalPrice)}
						</div>

						
					</>
				) : (
					<img
						className='basket__empty'
						src={'images/empty-cart.svg'}
						alt='Empty Cart'
					/>
				)}
			</div>
		</section>
	)
}

export default Shop
