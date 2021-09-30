import { ADD_MESSAGE } from "./types/messagesTypes";

const initialState = [
  { chatIndex: 1, messages: [] },
  { chatIndex: 2, messages: [] },
  { chatIndex: 3, messages: [] },
  { chatIndex: 4, messages: [] },
  { chatIndex: 5, messages: [] },
];

const messages = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
      if (state.find((item) => item.chatIndex === +payload.chatIndex)) {
        return state.map((item) => {
          if (item.chatIndex === +payload.chatIndex) {
            const length = item.messages.length;
            return {
              ...item,
              messages: [
                ...item.messages,
                { author: payload.author, id: length + 1, text: payload.text },
              ],
            };
          }
          return item;
        });
      } else {
        return [...state, { chatIndex: payload.chatIndex, messages: [] }];
      }
    default:
      return state;
  }
};

export default messages;
