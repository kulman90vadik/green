import { Camera, Facebook } from 'lucide-react';

import styles from './footer.module.scss';
import footerData from './footerData';



const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {footerData.map(item => {
            return(
              <li className={styles.item} key={item.id}>
                 <div className={styles.subtitle}>{item.title}</div>
                 <ul>
                  {item.links.map((link, i) => {
                    return(
                      <li key={i} className={styles.links}>
                        <a href="">{link}</a>
                      </li>
                    )
                  })}
                 </ul>
              </li>
            )
          })}
        </ul>

        <div className={styles.social}>
          <div className={styles.subtitle}>Social Media</div>
          <ul>
            <li className={styles.socialItem}>
              <a href="#" className={styles.link}>
                <Facebook color="#46A35899" strokeWidth={1} size={20}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;