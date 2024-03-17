import { useState, useRef, useEffect } from 'react'
import { FaRegTrashCan } from 'react-icons/fa6'
import { BsPencil } from 'react-icons/bs'
import styles from './todoItem.module.sass'
import useBoundStore from '../../stores/boundStore'
import Input from '../input/Input'
import Confirmation from '../confirmation/Confirmation'

const TodoItem = ({ id, text, isDone }) => {

  const { updateIsDone, editTask, deleteTask } = useBoundStore()
  const [isEditing, setIsEditing] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [inputValue, setInputValue] = useState(text)

  const itemClass = `${styles.todoItem} ${isDone ? styles.todoItemDone : ''}`
  const btnEdit = `${styles.btnEdit} ${isEditing ? styles.btnEditDone : ''}`
  const editTitleInputRef = useRef(null)

  useEffect(() => {
    if (isEditing) {
      editTitleInputRef?.current?.focus();
    }
  }, [isEditing])

  const handleEditTask = () => {
    setIsEditing(!isEditing)
    isEditing && editTask(id, inputValue)
  }

  const handleModal = (param) => {
    if (param) {
      deleteTask(id)
    }
    setShowModal(false)
  }

  return (
    <>
      <div className={itemClass}>
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
          value={inputValue}
          onInput={setInputValue}
          disabled={!isEditing}
          forwardedRef={editTitleInputRef}
        />

        <div className={styles.btnWrapper}>
          <button className={btnEdit} onClick={handleEditTask} >
            <BsPencil />
          </button>

          <button className={styles.btnRemove} onClick={() => setShowModal(true)} >
            <FaRegTrashCan value={{ color: 'red' }} />
          </button>
        </div>
      </div >
      {showModal && <Confirmation handleModal={handleModal} />}
    </>
  )
}

export default TodoItem