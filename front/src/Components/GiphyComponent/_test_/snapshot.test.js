import "@testing-library/react";
import { initialState } from "../../../store/gifs";
import gifsCategories from "../../../store/gifsCategories";
import { GET_CATEGORIES_SUCCESS } from "../../../store/types/gifsTypes";

describe('Snapshot test', () => {
  it('returns correct state after GET_CATEGORIES_SUCCESS action', () => {
    const action = {
      type: GET_CATEGORIES_SUCCESS,
      payload: [1, 2, 3],
    }
    const gifCatStore = gifsCategories(initialState, action)
    expect(gifCatStore).toMatchSnapshot();
  });
})