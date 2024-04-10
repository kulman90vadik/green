import styles from "./error.module.scss";

const NotFound = () => {
  return (
    <section className={styles.error}>
      <img className={styles.image} src="/images/notfound.png" alt="Not Found" />
    </section>
  );
}
 
export default NotFound;