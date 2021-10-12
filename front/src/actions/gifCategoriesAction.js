import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_FAILURE,
} from "../store/types/gifsTypes";

export const getCategoriesRequest = () => ({
  type: GET_CATEGORIES_REQUEST,
});

export const getCategoriesSuccess = (categories) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const getCategoriesFailure = (err) => ({
  type: GET_CATEGORIES_FAILURE,
  payload: err,
});

export const getCategories = () => (dispatch) => {
  dispatch(getCategoriesRequest());
  fetch(
    `https://api.giphy.com/v1/gifs/categories?api_key=VbSCLQ89n4HxFUky6Za4wLOtdwj5JYtI&limit=20`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      dispatch(getCategoriesSuccess(data.data));
    })
    .catch((err) => dispatch(getCategoriesFailure(err.message)));
};