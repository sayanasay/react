import {
  GET_GIFS_REQUEST,
  GET_GIFS_SUCCESS,
  GET_GIFS_FAILURE,
  SET_SEARCH_TEXT,
} from "../store/types/gifsTypes";

export const getGifsRequest = () => ({
  type: GET_GIFS_REQUEST,
});

export const getGifsSuccess = (gifs) => ({
  type: GET_GIFS_SUCCESS,
  payload: gifs,
});

export const getGifFailure = (err) => ({
  type: GET_GIFS_FAILURE,
  payload: err,
});

export const getGifs = (value, limit) => (dispatch) => {
  dispatch(getGifsRequest());
  const url = `https://api.giphy.com/v1/gifs/search?api_key=VbSCLQ89n4HxFUky6Za4wLOtdwj5JYtI&limit=${limit}&q=${value}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      dispatch(getGifsSuccess(data.data));
    })
    .catch((err) => dispatch(getGifFailure(err.message)));
};

export const setSearhText = (searchText) => ({
  type: SET_SEARCH_TEXT,
  payload: searchText,
});