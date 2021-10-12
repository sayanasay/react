import { SET_MESSAGES } from "./types/messagesTypes";

const initialState = [];

const messages = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MESSAGES:
      return payload;

    default:
      return state;
  }
};

export default messages;