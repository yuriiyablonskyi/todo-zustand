import useBoundStore from './stores/boundStore'
import TodoItem from './components/todoItem/todoItem.jsx'
import TodoCreator from './components/todoCreator/todoCreator.jsx'
import styles from './App.module.sass'

const App = () => {
  const { tasks, name } = useBoundStore()

  return (
    <div className={styles.App}>
      <h2 className={styles.name}>Hi, {name}</h2>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>To do list</h1>
        <TodoCreator />
        {tasks.map(({ id, text, isDone }) => (
          <TodoItem text={text} key={id} isDone={isDone} id={id} />
        ))}
      </div>
    </div>
  )
}

export default App
