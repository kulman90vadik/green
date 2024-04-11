import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { cardItem } from '../../models'
import './favorites.scss'
import Card from '../Home/Catalog/Card/Card'

const Favorites = () => {
	const favorites: cardItem[] = useSelector(
		(state: RootState) => state.favorites.favorites
	)

	// console.log(favorites)

	return (
		<section className='favorites'>
			<div className='favorites__container'>
				{favorites.length > 0 ? (
					<ul className='favorites__list'>
						{favorites.map(item => (
							<li key={item.id}>
								<Card item={item} />
							</li>
						))}
					</ul>
				) : (
					<img
						className='favorites__image'
						src='/images/smiley.png'
						alt='smiley'
					/>
				)}
			</div>
		</section>
	)
}

export default Favorites
