import { SET_CHATS } from "../store/types/chatsTypes"

export const setChats = (data) => ({
  type: SET_CHATS,
  payload: data,
});

export const fetchChats = () => (dispatch) => {
  fetch("http://localhost:3001/chats")
    .then((response) => response.json())
    .then((data) => dispatch(setChats(data)));
};

export const addChat = (chat) => (dispatch) => {
  fetch("http://localhost:3001/chats", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(chat),
  })
    .then((response) => response.json())
    .then((data) => dispatch(setChats(data)));
};

export const deleteChat = (id) => (dispatch) => {
  fetch(`http://localhost:3001/chats?id=${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => dispatch(setChats(data)));
};