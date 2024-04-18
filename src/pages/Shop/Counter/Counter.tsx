import './counter.scss'

type Props = {
	counter: number
	increment: () => void
	decrement: () => void
}

const Counter: React.FC<Props> = ({ decrement, increment, counter }) =>  {

		return (
			<>
				<div className='basket-cards__col basket-cards__counter'>
					<div className='counter'>
						<button
							className='counter__btn btn-reset'
							type='button'
							onClick={decrement}
							disabled={counter === 1}
						>
							-
						</button>
						<button className='counter__number btn-reset' type='button'>
							{counter}
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
