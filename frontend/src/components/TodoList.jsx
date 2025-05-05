// src/components/TodoList.jsx
import { useEffect, useState } from 'react';
import api from '../services/api';
import Todo from './Todo';

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [text,  setText]  = useState('');
  
  useEffect(() => {
    api.get('/todos').then(res => setTodos(res.data));
  }, []);

  const createTodo = async () => {
    if (!text.trim()) return;
    const { data } = await api.post('/todos', { title: text, description: '', isCompleted: false });
    setTodos([data, ...todos]);
    setText('');
  };

  const updateTodo = async (id, payload) => {
    const { data } = await api.put(`/todos/${id}`, payload);
    setTodos(todos.map(t => (t._id === id ? data : t)));
  };

  const deleteTodo = async id => {
    await api.delete(`/todos/${id}`);
    setTodos(todos.filter(t => t._id !== id));
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="flex mb-4">
        <input
          className="flex-1 p-2 border rounded-l"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="New task…"
        />
        <button
          onClick={createTodo}
          className="bg-primary text-white px-4 rounded-r"
        >
          Add
        </button>
      </div>
      {todos.map(t => (
        <Todo
          key={t._id}
          todo={t}
          onUpdate={updateTodo}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  );
}
