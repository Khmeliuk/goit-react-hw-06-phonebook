import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { filterReducer } from "./filterReducer";
import { itemReducer } from "./itemReducer";

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
