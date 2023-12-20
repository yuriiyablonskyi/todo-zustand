import styles from './Confirmation.module.sass'

const Confirmation = ({ handleModal }) => (
  <div className={styles.confirmation}>
    <div className={styles.confirmationBox}>
      <p className={styles.text}>Delete task?</p>
      <div className={styles.wrapperBtn}>
        <button className={styles.btn} onClick={() => handleModal(true)}>yes</button>
        <button className={styles.btn} onClick={() => handleModal(false)}>no</button>
      </div>
    </div>
  </div>
)

export default Confirmation