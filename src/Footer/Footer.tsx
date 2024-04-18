

import styles from './footer.module.scss';
import FooterNav from './FooterNav';
import Payment from './Payment';
import Socials from './Socials';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <FooterNav />

        <div className={styles.social}>
          
          <Socials />

          <Payment />

        </div>
      </div>
    </footer>
  );
}
 
export default Footer;