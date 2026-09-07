import { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList'

let nextId = 1

function TaskBoard() {
  const [tasks, setTasks] = useState([])

  function addTask(text) {
    const trimmed = text.trim()
    if (!trimmed) return
    setTasks((prev) => [
      ...prev,
      { id: nextId++, text: trimmed, done: false },
    ])
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    )
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const remaining = tasks.filter((task) => !task.done).length

  return (
    <main className="board">
      <h1>タスクボード</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
      {tasks.length > 0 && (
        <p className="summary">
          残り {remaining} / {tasks.length} 件
        </p>
      )}
    </main>
  )
}

export default TaskBoard
