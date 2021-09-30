import { ADD_CHAT, DELETE_CHAT } from "./types/chatsTypes";

const initialState = [
  { name: "user1", id: 1 },
  { name: "user2", id: 2 },
  { name: "user3", id: 3 },
  { name: "user4", id: 4 },
  { name: "user5", id: 5 },
];

const chats = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CHAT:
      return [...state, payload];

    case DELETE_CHAT:
      return state.filter((el) => el.id !== payload);

    default:
      return state;
  }
};

export default chats;
