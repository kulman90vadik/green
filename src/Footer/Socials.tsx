import styles from './socials.module.scss'
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react'

const Socials = () => {
	return (
		<>
			<div className={styles.subtitle}>Social Media</div>
			<ul className={styles.list}>
				<li className={styles.item}>
					<a href='#' className={styles.link}>
						<Facebook color='#46A35899' strokeWidth={1} size={20} />
					</a>
				</li>
				<li className={styles.item}>
					<a href='#' className={styles.link}>
						<Instagram color='#46A35899' strokeWidth={1} size={20} />
					</a>
				</li>
				<li className={styles.item}>
					<a href='#' className={styles.link}>
						<Twitter color='#46A35899' strokeWidth={1} size={20} />
					</a>
				</li>
				<li className={styles.item}>
					<a href='#' className={styles.link}>
						<Youtube color='#46A35899' strokeWidth={1} size={20} />
					</a>
				</li>
				<li className={styles.item}>
					<a href='#' className={styles.link}>
						<Linkedin color='#46A35899' strokeWidth={1} size={20} />
					</a>
				</li>
			</ul>
		</>
	)
}

export default Socials
