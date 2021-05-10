// create the container to hold our global state data and functionality so we can provide it throughout our app
import React, { createContext, useContext } from 'react';

// allow us to use the state created from the createContext function
import { useProductReducer } from './reducers';

const StoreContext = createContext;

const { Provider } = StoreContext;

