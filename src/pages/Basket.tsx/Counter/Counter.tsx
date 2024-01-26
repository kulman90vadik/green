import './counter.scss'

type Props = {
	count: number
	increment: () => void
	decrement: () => void
}

const Counter: React.FC<Props> = ({ decrement, increment, count }) => {
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
