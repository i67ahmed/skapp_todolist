
const todoReducer = (state = [],action) => {
  switch(action.type){
    case 'POPULATE_ITEMS':
      return action.items;
    case 'ADD_ITEM':
      return [...state,action.item];
    case 'DELETE_ITEM':
      return state.filter((item) => item !== action.itemToBeDeleted);
    default:
      return state 
  }
};

export {todoReducer as default};