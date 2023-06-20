import { createContext, useReducer } from 'react';

export default function createDataContext(reducer, actions, initialState) {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions === { addBlogPost: (dispatch) => { return () => { #do something } } }
    // we are going to loop through the actions object and call each function with dispatch
    // this will return a function that we can pass down with the value prop
    const boundActions = {};
    for (let key in actions) {
      // key === 'addBlogPost'
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
}
