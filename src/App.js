import React, {useReducer} from 'react';
import TodoList from './todo_list';
import TodoAdd from './todo_form_add';
import './App.css';
import TodoContext from './todo-context';
import todoReducer from './todo_reducer';
import {useState, useEffect} from 'react';
import {Button} from 'semantic-ui-react';
import { SkynetClient } from 'skynet-js';



function App() {
  
  const [items, todoitemsDispatch] = useReducer(todoReducer);


  const portal =
    window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;

  // Initiate the SkynetClient
  const client = new SkynetClient(portal);


  const [mySky, setMySky] = useState();
  const [loggedIn, setLoggedIn] = useState(null);

  const hostApp = 'localhost';  


  useEffect(() => {
    async function initMySky() {
      try {

        const mySky = await client.loadMySky(hostApp);
    
    
        // check if user is already logged
        const loggedIn = await mySky.checkLogin();
        
        // set react state for login status and
        // to access mySky in rest of app
        setMySky(mySky);
        setLoggedIn(loggedIn);
        mySky.checkLogin();
      } catch (e) {
        console.error(e);
      }
    }
    
  initMySky();
  });

  const mySkyLogin = async () => {
    // Try login again, opening pop-up
    const status = await mySky.requestLoginAccess();

    // set react state
    setLoggedIn(status);

}

  const mySkyLogout = async () => {

  //logout the user
  await mySky.logout();

  //set react state
  setLoggedIn(false);
};



// useEffect(() => {
//   const items = mySky.getJSON(hostApp,'items');
//   if (items) {
//     todoitemsDispatch({ type: 'POPULATE_ITEMS', items });
//   }
// }, []);

// useEffect(() => {
//   mySky.setJSON(hostApp,'items');
// }, [items]);


return (
  <TodoContext.Provider value={{ items, todoitemsDispatch}}>
    <div className="App">
      <header className="App-header">
        To Do items
        {loggedIn === false && (
        <Button onClick = {mySkyLogin}> Login with MySky</Button>)}
        {loggedIn === true && (
        <Button onClick = {mySkyLogout}> Logout with MySky </Button>)}
        <TodoList/>
        <TodoAdd/>
      </header>
    </div>
  </TodoContext.Provider> 
  );
}

export default App;