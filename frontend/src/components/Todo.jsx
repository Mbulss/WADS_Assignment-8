// src/components/Todo.jsx
export default function Todo({ todo, onUpdate, onDelete }) {
  return (
    <div className="flex items-center justify-between mb-2 p-2 border rounded">
      <span
        className={`cursor-pointer ${todo.isCompleted ? 'line-through text-gray-400' : ''}`}
        onClick={() => onUpdate(todo._id, { isCompleted: !todo.isCompleted })}
      >
        {todo.title}
      </span>
      <button
        onClick={() => onDelete(todo._id)}
        className="text-red-500 hover:underline text-sm"
      >
        Delete
      </button>
    </div>
  );
}
