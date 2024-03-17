const todoStore = (set) => ({
  tasks: [
    { id: 1, text: 'first task', isDone: true },
    { id: 2, text: 'second task', isDone: true },
    { id: 3, text: 'third task', isDone: false }
  ],

  updateIsDone: (taskId, newDone) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, isDone: newDone } : task
      )
    })),

  editTask: (taskId, newText) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    })),

  deleteTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id != taskId)
    })),

  addNewTask: (task) =>
    set((state) => ({
      tasks: [task, ...state.tasks]
    }))
})

export default todoStore
