import { ADD_CHAT, DELETE_CHAT } from "../store/types/chatsTypes"

export const deleteChat = (id) => ({
  type: DELETE_CHAT,
  payload: id,
});

export const addChat = (chat) => ({
  type: ADD_CHAT,
  payload: chat,
});