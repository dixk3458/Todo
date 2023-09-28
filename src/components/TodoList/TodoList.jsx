import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
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
  return (
    <section>
      <ul>
        {todos.map(item => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
