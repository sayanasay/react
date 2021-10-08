import {
  GET_GIFS_SUCCESS,
  GET_GIFS_REQUEST,
  GET_GIFS_FAILURE,
  SET_SEARCH_TEXT,
} from "./types/gifsTypes";

export const STATUSES = {
  IDLE: 0,
  REQUEST: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

const initialState = {
  gifsList: [],
  searchText: "",
  request: STATUSES.IDLE,
  error: null,
};

const gifs = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_GIFS_REQUEST:
      return { ...state, request: STATUSES.REQUEST };

    case GET_GIFS_SUCCESS:
      return {
        ...state,
        gifsList: payload,
        request: STATUSES.SUCCESS,
        error: null,
      };

    case GET_GIFS_FAILURE:
      return { ...state, request: STATUSES.FAILURE, error: payload };

    case SET_SEARCH_TEXT:
      return { ...state, searchText: payload };

    default:
      return state;
  }
};

export default gifs;