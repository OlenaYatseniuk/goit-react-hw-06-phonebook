import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts/reducer.contacts';
import filterReducer from './filter/reducer.filter';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
export default rootReducer;
