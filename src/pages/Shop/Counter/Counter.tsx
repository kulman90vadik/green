// import { useSelector } from 'react-redux'
// import { cardItem } from '../../../models'
// import { RootState } from '../../../redux/store'
import './counter.scss'
// import { useEffect, useMemo, useRef } from 'react'
import React from 'react'

type Props = {
	count: number
	// objId: number
	increment: () => void
	decrement: () => void
}


const Counter: React.FC<Props> = ({ decrement, increment, count }) =>  {

	 console.log('ismenil')

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

export default React.memo(Counter)
