import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
//import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactSlice';
import { filterReducer } from './filterSlice';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
    filter: filterReducer,
  },
});
