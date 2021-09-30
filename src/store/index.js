import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import chats from "./chats";
import messages from "./messages";
import profileReducer from "./profile";

const reducers = combineReducers({
  profileReducer,
  chats,
  messages
});

const store = createStore(reducers, composeWithDevTools());

export default store;