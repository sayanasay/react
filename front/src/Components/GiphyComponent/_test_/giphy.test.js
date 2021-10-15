import configureStore from "redux-mock-store";
import "@testing-library/react";
import { getCategories } from "../../../actions/gifCategoriesAction";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_SUCCESS,
} from "../../../store/types/gifsTypes";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it("dispatches getCategories on mount", () => {
    fetchMock.getOnce(
      `https://api.giphy.com/v1/gifs/categories?api_key=VbSCLQ89n4HxFUky6Za4wLOtdwj5JYtI&limit=20`,
      {
        headers: { "content-type": "application/json" },
        body: { data: [1, 2, 3], status: "ok" },
      }
    );

    const expectedActions = [
      {
        type: GET_CATEGORIES_REQUEST,
      },
      {
        type: GET_CATEGORIES_SUCCESS,
        payload: [1, 2, 3],
      },
    ];

    const store = mockStore({});
    return store.dispatch(getCategories()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});