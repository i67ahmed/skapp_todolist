import React, { useContext } from 'react';
import TodoContext from './todo-context';
import TodoItems from './todo_items';

const TodoList = () => {
  const { items = [] } = useContext(TodoContext);
  return (
    <div className="items-container">
      <ul>
        {items.map((item,index) => (
          <li key={index}>
            <TodoItems item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TodoList as default };