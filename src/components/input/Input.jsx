import styles from './Input.module.sass'

// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, value, onInput, disabled }) => (
  <input
    className={styles.input}
    placeholder={placeholder}
    value={value}
    onChange={({ target }) => onInput(target.value)}
    disabled={disabled}
  />
)

export default Input
