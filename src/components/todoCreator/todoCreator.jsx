import { useState } from 'react'
import styles from './todoCreator.module.sass'
import useBoundStore from '../../stores/boundStore'
import Input from '../input/Input'

const TodoCreator = () => {

  const [inputValue, setInputValue] = useState('')
  const { addNewTask } = useBoundStore()

  const handleAddTask = () => {
    const lengthValue = inputValue.trim().length
    if (lengthValue < 5) {
      return alert(`You are missing ${5 - lengthValue} characters. Minimum length is 5`)
    }

    const newTask = {
      id: Math.random().toString(16).slice(2) + new Date().getTime().toString(36),
      text: inputValue,
      isDone: false
    }
    addNewTask(newTask)
    setInputValue('')
  }

  return (
    <div className={styles.todoCreator}>
      <Input
        placeholder='Write something here...'
        value={inputValue}
        onInput={setInputValue}
      />
      <button className={styles.btn} onClick={handleAddTask}>
        <span className={styles.spanText}>Add task</span>
        <span className={styles.spanPlus}>+</span>
      </button>
    </div>
  )
}

export default TodoCreator