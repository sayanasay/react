import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
} from "./types/gifsTypes";

export const STATUSES = {
  IDLE: 0,
  REQUEST: 1,
  SUCCESS: 2,
  FAILURE: 3,
};

const initialState = {
  categories: [],
  request: STATUSES.IDLE,
  error: null,
};

const gifsCategories = (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_CATEGORIES_REQUEST:
      return { ...state, request: STATUSES.REQUEST };

    case GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
        request: STATUSES.SUCCESS,
        error: null,
      };

    case GET_CATEGORIES_FAILURE:
      return { ...state, request: STATUSES.FAILURE, error: payload };

    default:
      return state;
  }
};

export default gifsCategories;