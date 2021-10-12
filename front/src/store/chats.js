import { SET_CHATS } from "./types/chatsTypes";

const initialState = [];

const chats = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CHATS:
      return payload;

    default:
      return state;
  }
};

export default chats;
