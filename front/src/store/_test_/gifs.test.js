import gifs, {  } from "../gifs";
import {
  GET_GIFS_SUCCESS,
  GET_GIFS_REQUEST,
  GET_GIFS_FAILURE,
} from "../types/gifsTypes";

describe('gifs reducer', () => {

  const initialState = {
    gifsList: [],
    searchText: "",
    request: 0,
    error: null,
  }

  it('new request', () => {
    const action = {
      type: GET_GIFS_REQUEST,
    }

    expect(gifs(initialState, action)).toEqual({
      ...initialState,
      request: 1,
    });
  });

  it('success request', () => {
    const action = {
      type: GET_GIFS_SUCCESS,
      payload: [1, 2, 3],
    }
    expect(gifs(initialState, action)).toEqual({
      ...initialState,
      request: 2,
      gifsList: action.payload,
      error: null,
    });
  });

  it('failure request', () => {
    const action = {
      type: GET_GIFS_FAILURE,
      payload: 'error message'
    }
    expect(gifs(initialState, action)).toEqual({
      ...initialState,
      request: 3,
      error: action.payload,
    });
  });

  it('should return the initial state', () => {
    expect(gifs(undefined, {})).toEqual(initialState);
  });
});