// src/store/index.js
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducres';



const storage2 = {
    getItem: (key:any) => {
      return Promise.resolve(localStorage.getItem(key)); // Wrap in a Promise to make it async
    },
    setItem: (key:any, value:any) => {
      return Promise.resolve(localStorage.setItem(key, value));
    },
    removeItem: (key:any) => {
      return Promise.resolve(localStorage.removeItem(key));
    }
  };
  
  const persistConfig = {
    key: 'root',
    storage: storage2
  };
// @ts-ignore
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);