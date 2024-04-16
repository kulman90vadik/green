import { useSelector } from 'react-redux'
import { cardItem } from '../../models'
import styles from '../../components/Login/login.module.scss'
import stylesshop from '../../components/Modal/modalShop.module.scss'
import './basket.scss'

import BasketItem from './BasketItem/BasketItem'
import { RootState } from '../../redux/store'
import Modal from '../../components/Modal/Modal'
import { useState } from 'react'

const Shop = () => {
	const [modal, setModal] = useState(false)
	const totalPrice: number = useSelector(
		(state: RootState) => state.basket.totalPrice
	)
	const basket: cardItem[] = useSelector(
		(state: RootState) => state.basket.basket
	)
	const clickSubmitHandler = (e: React.FormEvent) => {
		e.preventDefault();
		setModal(true)
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

					  <Modal openModal={modal} setModal={setModal}>
							<div className={styles.content}>
								<img className={stylesshop.smallImg} src="/images/thank-you.svg" alt="thank-you.png" />
								<span className={stylesshop.title}>Your order has been received</span>
								<ul className={stylesshop.list}>
									{basket.map((item: cardItem) => {
											return (
												<li key={item.id} className={stylesshop.item}>
													<img className={stylesshop.image} src={item.image} alt={item.title} />
													<span className={stylesshop.subtitle}>{item.title}</span>
													<span className={stylesshop.counter}>{`(x${item.counter})`}</span>
													<span className={stylesshop.price}>
													{new Intl.NumberFormat('de-DE', {
														style: 'currency',
														currency: 'EUR'
														}).format((item.price - (item.price * item.sale) / 100) * item.counter)}
													</span>
												</li>
											)
										})}
								</ul>
								
								<button className={styles.close} onClick={() => setModal(false)}>&#x2718;</button>
							</div>
						</Modal>
					
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
