import { SET_MESSAGES } from "../store/types/messagesTypes";

export const setMessages = (data) => ({
  type: SET_MESSAGES,
  payload: data,
});

export const robotMessage = (messages, chatId, messageId) => (dispatch) => {
  let interval;
  if (messages && messages[messages?.length - 1]?.author === "user") {
    interval = setTimeout(
      () =>
        dispatch(
          addMessage(chatId, {
            id: messageId,
            text: "This is automatic answer",
            author: "robot",
          })
        ),
      1500
    );
  }
  return () => {
    clearTimeout(interval);
  };
};

export const fetchMessages = () => (dispatch) => {
  fetch("http://localhost:3001/messages")
    .then((response) => response.json())
    .then((data) => dispatch(setMessages(data)));
};

export const addMessage = (chatId, message) => (dispatch) => {
  fetch("http://localhost:3001/messages", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ chatId, message }),
  })
    .then((response) => response.json())
    .then((data) => dispatch(setMessages(data)));
};