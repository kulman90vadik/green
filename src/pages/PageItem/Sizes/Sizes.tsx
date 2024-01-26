import { useState } from 'react'
import './sizes.scss'

type Props = {
	sizes: string[]
	setCountSize: (i: number) => void
}

const Sizes: React.FC<Props> = ({ sizes, setCountSize }) => {
	const [count, setCount] = useState(0)

	const changeSizeHandler = (i: number) => {
		setCountSize(i)
		setCount(i)
	}

	return (
		<>
			<ul className='sizes'>
				{sizes.map((size, i) => (
					<li className='sizes__item' key={size}>
						<button
							className={`btn-reset ${
								count === i ? 'sizes__btn--green sizes__btn' : 'sizes__btn'
							}`}
							type='button'
							onClick={() => changeSizeHandler(i)}
						>
							{size}
						</button>
					</li>
				))}
			</ul>
		</>
	)
}

export default Sizes
