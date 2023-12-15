import styles from './Confirmation.module.sass'

//fix classes name

const Confirmation = ({ handleModal }) => (
  <div className={styles.Confirmation}>
    <div className={styles.ConfirmationBox}>
      <p className={styles.text}>Delete task?</p>
      <div className={styles.wrapperBtn}>
        {/*  ------------стоит ли сделать как ниже? как лучше?------------*/}
         <button className={styles.btn} onClick={() => handleModal(true)}>yes</button>
         <button className={styles.btn} onClick={() => handleModal(false)}>no</button>
        {/*<button className={styles.btn} onClick={onYesClick}>yes</button>*/}
        {/*<button className={styles.btn} onClick={onNoClick}>no</button>*/}
      </div>
    </div>
  </div>
)

export default Confirmation