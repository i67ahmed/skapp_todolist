import React, { useContext, useState } from 'react';
import TodoContext from './todo-context';

const TodoAdd = () => {
  const [item, setItem] = useState('');
  const {todoitemsDispatch} = useContext(TodoContext);

const handleSubmit = (e) => {
    e.preventDefault();
    todoitemsDispatch({type: 'ADD_ITEM', item});
    setItem('');
  };

return (
    <div>
      <p>Add item</p>
      <form onSubmit={handleSubmit}>
        <input value={item} onChange={(e) => setItem(e.target.value)} />
        <button>Add Item</button>
      </form>
    </div>
  );
};

export { TodoAdd as default };