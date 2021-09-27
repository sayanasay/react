import { CHANGE_CHECKBOX } from "./types/profileTypes";

const initialState = {
  checkBox: false,
};

const profileReducer = (state = initialState, {type}) => {
  switch (type) {
    case CHANGE_CHECKBOX:
      return { checkBox: !state.checkBox };
    default:
      return state;
  }
}

export default profileReducer;