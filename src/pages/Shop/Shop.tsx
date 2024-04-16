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
	const clickSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
	}

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
							<form  className="basket__form" onSubmit={clickSubmitHandler}>
							<span className='basket__top basket__title'>Cart Totals</span>
							<span className='basket__coupon'>Coupon Apply</span>
							<div className='basket__input'>
								<input type='text' placeholder='Enter coupon code here...' />
								<button className='basket__apply' type='button'>
									Apply
								</button>
							</div>
							<ul className='basket__list'>
								<li className='basket__item'>
									<span className='basket__text'>Subtotal</span>
									<span className='basket__price'>
										{new Intl.NumberFormat('de-DE', {
											style: 'currency',
											currency: 'EUR'
										}).format(totalPrice)}
									</span>
								</li>
								<li className='basket__item'>
									<span className='basket__text'>Coupon Discount</span>
									<span className='basket__price'>0</span>
								</li>
								<li className='basket__item'>
									<span className='basket__text'>Shiping</span>
									<span className='basket__price'>
										{new Intl.NumberFormat('de-DE', {
											style: 'currency',
											currency: 'EUR'
										}).format(15)}
									</span>
								</li>
							</ul>
							<div className='basket__box'>
								<span className='basket__total'>Total</span>
								<span className='basket__sumprice'>
									{new Intl.NumberFormat('de-DE', {
										style: 'currency',
										currency: 'EUR'
									}).format(totalPrice + 15)}
								</span>
							</div>
							<button className='basket__submit'>Proceed To Checkout</button>		
							</form>
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
