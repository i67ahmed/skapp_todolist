import React from 'react';
const TodoItem = ({ item,deleteItem }) => { 
  return ( <div> 
    <span>{item}</span> 
    <button onClick={() => deleteItem(item)}>X</button>
    </div> );
};

export { TodoItem as default };
