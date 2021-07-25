import React, {useReducer} from 'react';
import TodoList from './todo_list';
import TodoAdd from './todo_form_add';
import './App.css';
import TodoContext from './todo-context';
import todoReducer from './todo_reducer';


function App() {
  
  const [items, todoitemsDispatch] = useReducer(todoReducer);


return (
  <TodoContext.Provider value={{ items, todoitemsDispatch}}>
    <div className="App">
      <header className="App-header">
        To Do items
        <TodoList/>
        <TodoAdd/>
      </header>
    </div>
  </TodoContext.Provider> 
  );
}

export default App;