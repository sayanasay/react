import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import chats from "./chats";
import messages from "./messages";
import profileReducer from "./profile";
import gifs from "./gifs";
import gifsCategories from "./gifsCategories";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({
  profileReducer,
  chats,
  messages,
  gifs,
  gifsCategories
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
  );

export const persistor = persistStore(store);