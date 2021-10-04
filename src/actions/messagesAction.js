import { ADD_MESSAGE } from "../store/types/messagesTypes";

export const addMessage = (message) => ({
  type: ADD_MESSAGE,
  payload: message,
});

export const robotMessage = (messages, chatId) => (dispatch) => {
  let interval;
  if (messages && messages[messages?.length - 1]?.author === "user") {
    interval = setTimeout(
      () =>
        dispatch(addMessage({
          chatIndex: chatId,
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
}