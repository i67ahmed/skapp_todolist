import React, { useState } from 'react';

const TodoAdd = ({ addItem }) => {
  const [item, setItem] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
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