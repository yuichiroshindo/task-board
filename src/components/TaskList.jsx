function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty">タスクはまだありません</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id} className={task.done ? 'task done' : 'task'}>
          <label className="task-label">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => onToggle(task.id)}
            />
            <span>{task.text}</span>
          </label>
          <button
            type="button"
            className="delete-button"
            onClick={() => onDelete(task.id)}
            aria-label={`${task.text} を削除`}
          >
            削除
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
