import React, { useState } from 'react';

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
  return (
    <ul>
      {todos.map(item => {
        return <li key={item.id}>{item.text}</li>;
      })}
    </ul>
  );
}
