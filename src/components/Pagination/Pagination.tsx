import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { pageChange } from '../../redux/slices/catalogClise'
import styles from './pagination.module.scss'
import { useState } from 'react'

const Pagination = () => {
	const dispatch = useDispatch()
	const [count, setCount] = useState(0)
	const lengthCatalog: number = useSelector((state: RootState) => state.catalog.lengthCatalog)
	const pageCount = Math.ceil(lengthCatalog / 5)

	let result = []
	for (let i = 0; i < pageCount; i++) result.push(i + 1)

	const changePage = (n: number, index: number) => {
		dispatch(pageChange(n))
		setCount(index)
	}

	return (
		<ul className={styles.pagination}>
			{result.map((btn, index) => {
				return (
					<li className={styles.item} key={btn}>
						<button
							className={`${styles.btn} ${
								count === index ? styles.active : ''
							}`}
							type='button'
							onClick={() => changePage(btn, index)}
						>
							{btn}
						</button>
					</li>
				)
			})}
		</ul>
	)
}

export default Pagination
