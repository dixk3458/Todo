import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState([
    {
      id: '123',
      text: '장보기',
      status: 'active',
    },
    {
      id: '1234',
      text: '공부하기',
      status: 'active',
    },
    {
      id: '1235',
      text: '장보기',
      status: 'completed',
    },
  ]);

  const handleAdd = item => setTodos([...todos, item]);

  const handleUpdate = updated => {
    setTodos(todos.map(t => (t.id === updated.id ? updated : t)));
  };

  const handleDelete = deleted => {
    setTodos(todos.filter(t => t.id !== deleted.id));
  };

  const filtered = getFilteredItems(todos, filter);

  return (
    <section>
      <ul>
        {filtered.map(item => {
          return (
            <Todo
              key={item.id}
              item={item}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          );
        })}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function getFilteredItems(todos, filter) {
  if (filter === 'all') {
    return todos;
  }

  return todos.filter(t => t.status === filter);
}
