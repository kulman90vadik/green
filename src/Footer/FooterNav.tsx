import footerData from './footerData'
import styles from './footernav.module.scss'

const FooterNav = () => {
	return (
		<ul className={styles.list}>
			{footerData.map(item => {
				return (
					<li className={styles.item} key={item.id}>
						<div className={styles.subtitle}>{item.title}</div>
						<ul>
							{item.links.map((link, i) => {
								return (
									<li key={i} className={styles.links}>
										<a href=''>{link}</a>
									</li>
								)
							})}
						</ul>
					</li>
				)
			})}
		</ul>
	)
}

export default FooterNav
