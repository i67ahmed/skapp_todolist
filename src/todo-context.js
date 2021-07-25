import React from 'react';

const TodoContext = React.createContext({
  items: [],
  itemsDispatch: () => {},
});

export { TodoContext as default };