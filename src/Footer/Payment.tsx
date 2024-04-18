import styles from './payment.module.scss'


const Payment = () => {
  return (
    <div className={styles.payment}>
      <div className={styles.subtitle}>We accept</div>
      <img className={styles.image} src="images/payment-img.png" alt="payment" />
    </div>
  );
}
 
export default Payment;