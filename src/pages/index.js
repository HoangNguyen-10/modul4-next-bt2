import styles from '../styles/Login.module.css'
export default function index() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formContent}>
        <form>

          <label className={styles.label}>Email:</label>
          <input className={styles.input} placeholder="Enter your email" />
          <label className={styles.label}>Password:</label>
          <input className={styles.input} placeholder="Enter your password" />
          <button className={styles.button}>Login</button>
        </form>
      </div>
    </div>
  )
}
