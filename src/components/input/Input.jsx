import { useRef, useEffect } from 'react'
import styles from './Input.module.sass'

const Input = ({ placeholder, value, onInput, disabled, forwardedRef }) => {

  const childRef = useRef(null)
  useEffect(() => {
    if (forwardedRef) {
      forwardedRef.current = childRef.current
    }
  }, [forwardedRef])

  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={({ target }) => onInput(target.value)}
      disabled={disabled}
      ref={childRef}
    />
  )
}

export default Input