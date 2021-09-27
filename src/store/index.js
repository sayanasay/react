import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import profileReducer from "./profile";

export const store = createStore(profileReducer, composeWithDevTools());