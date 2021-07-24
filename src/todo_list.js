import React from 'react';
import TodoItems from './todo_items';

const TodoList = ({ items }) => {
  return (
    <div className="items-container">
      <ul>
        {items.map((item) => (
          <li>
            <TodoItems key={item} item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TodoList as default };