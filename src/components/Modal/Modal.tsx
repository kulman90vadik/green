
import { useEffect, useRef } from 'react'
import styles from './modal.module.scss'


export default function Modal({openModal, setModal, children}: {
  children: React.ReactNode
  openModal: boolean
  setModal: (b: boolean) => void
}) {
	const ref = useRef<HTMLDialogElement>(null)
	useEffect(() => {
		if (openModal) {
			ref.current?.showModal()
		} else {
			ref.current?.close()
		}
	}, [openModal])

	let active = `${styles.active} ${styles.modal}`

	return (
		<dialog className={`${styles.modal} ${openModal ? active : ''}`} ref={ref}  onClick={() => setModal(false)}>
			<div className='' onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</dialog>
	)
}


// export default Modal
