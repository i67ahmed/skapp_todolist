import React, {useEffect,useState} from 'react';
import TodoList from './todo_list';
import TodoAdd from './todo_form_add';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([...items, item]);
  };

const deleteItem = (itemToBeDeleted) => {
    setItems(items.filter((item) => itemToBeDeleted !== item));
  };

useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
      setItems(items);
    }
  }, []);

useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

return (
    <div className="App">
      <header className="App-header">
        To Do items
        <TodoList items={items} deleteItem={deleteItem} />
        <TodoAdd addItem={addItem} />
      </header>
    </div>
  );
}

export default App;