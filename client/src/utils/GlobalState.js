// somehow this code was broken?? they are exactly the same...

// // create the container to hold our global state data and functionality so we can provide it throughout our app
// import React, { createContext, useContext } from 'react';

// // allow us to use the state created from the createContext function
// import { useProductReducer } from './reducers';

// const StoreContext = createContext;

// const { Provider } = StoreContext;

// const StoreProvider = ({ value = [], ...props }) => {
//     const [state, dispatch] = useProductReducer({
//         products: [],
//         categories: [],
//         currentCategory: '',
//     });
//     // use this to confirm it works!
//     console.log(state);
//     return <Provider value={[state, dispatch]} {...props} />;
// };

// const useStoreContext = () => {
//     return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };



import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
