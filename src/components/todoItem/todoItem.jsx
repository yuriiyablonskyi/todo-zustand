import { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styles from './todoItem.module.sass'
import useBoundStore from '../../stores/boundStore'
import Input from '../input/Input'
import Confirmation from '../../pages/modals/confirmation/Confirmation'

const TodoItem = ({ id, text, isDone }) => {
  
  const { updateIsDone, editTask, deleteTask } = useBoundStore()
  const [isEditing, setIsEditing] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [inputValue, setInputValue] = useState(text)
  const editTitleInputRef = useRef(null)

  const itemClass = `${styles.todoItem} ${isDone ? styles.todoItemDone : ''}`
  const btnEdit = `${styles.btnEdit} ${isEditing ? styles.btnEditDone : ''}`

  const handleEditTask = () => {
    setIsEditing(!isEditing)
    {/* стоит ли сделать так, как указано ниже? Сделал так, чтобы функция editTask вызывалась только тогда, когда я кликаю, чтобы сохранить */ }
    isEditing && editTask(id, inputValue)
  }

  const handleYesClick = () => {
    setShowModal(false)
    deleteTask(id)
  }

  const handleNoClick = () => setShowModal(false)

  useEffect(() => {
    if (isEditing) {
      editTitleInputRef?.current?.focus();
    }
  }, [isEditing])

  return (
    <div className={itemClass}>
      {/* портал будет из каждого елемента? так оставить? */}
      {showModal && createPortal(
        <Confirmation onYesClick={handleYesClick} onNoClick={handleNoClick} />,
        document.body
      )}
      <label className={styles.label}>
        <input
          className={styles.input}
          type='checkbox'
          checked={isDone}
          onChange={() => updateIsDone(id, !isDone)}
        />
        <span className={styles.checkbox}></span>
      </label>

      <Input
        forwardedRef={editTitleInputRef}
        value={inputValue}
        onInput={setInputValue}
        disabled={!isEditing}
      />

      <div className={styles.btnWrapper}>
        <button className={btnEdit} onClick={handleEditTask} >
          <svg xmlns='http://www.w3.org/2000/svg' width='44' height='44' fill='none' viewBox="0 0 44 44" preserveAspectRatio="xMidYMid meet">
            <path fill='#A089FE' fillRule='evenodd' d='M28.784 7 37 15.216 17.216 35H9v-8.216L28.784 7Zm0 3.286-2.752 2.753 4.93 4.929 2.752-2.752-4.93-4.93Zm.534 9.325-4.93-4.93-13.064 13.066v4.93h4.93L29.317 19.61Z' clipRule='evenodd' />
          </svg>
        </button>

        <button className={styles.btnRemove} onClick={() => setShowModal(true)} >
          <svg xmlns='http://www.w3.org/2000/svg' width={44} height={44} fill='none' viewBox="0 0 44 44" preserveAspectRatio="xMidYMid meet">
            <path fill='#ED6666' d='m23.532 24.861 2.553 2.539-1.532 1.523L22 26.384l-2.553 2.539-1.532-1.523 2.553-2.539-2.553-2.538 1.532-1.523L22 23.338l2.553-2.538 1.532 1.523-2.553 2.538Z' />
            <path fill='#ED6666' fillRule='evenodd' d='M28.861 8H15.14v5.744H9v2.153h3.25V36h19.5V15.897H35v-2.153h-6.139V8Zm-2.167 5.744v-3.59h-9.388v3.59h9.388Zm-12.277 2.153v17.95h15.166v-17.95H14.417Z' clipRule='evenodd' />
          </svg>
        </button>
      </div>
    </div >
  )
}

export default TodoItem