import { ADD_MESSAGE } from "../store/types/messagesTypes";

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});