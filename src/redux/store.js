import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import action from "./action";

const filterReducer = (state = "", action) => {
  return state;
};

const itemReducer = (
  state = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  action
) => {
  return state;
};

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

const rootReducer = combineReducers({ contacts: contactsReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
