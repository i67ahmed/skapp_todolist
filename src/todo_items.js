import React, { useContext } from 'react';
import TodoContext from './todo-context';

const TodoItem = ({ item }) => {
  const {todoitemsDispatch} = useContext(TodoContext);

  return(
    <div>
      <span>{item}</span>
      <button onClick = {() => todoitemsDispatch({ type: 'DELETE_ITEM', itemToBeDeleted : item})}> X </button>
    </div>
  );
};


export { TodoItem as default };
