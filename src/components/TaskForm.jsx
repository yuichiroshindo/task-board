import { useState } from 'react'

function TaskForm({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onAdd(text)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="新しいタスクを入力"
        aria-label="新しいタスク"
      />
      <button type="submit">追加</button>
    </form>
  )
}

export default TaskForm
