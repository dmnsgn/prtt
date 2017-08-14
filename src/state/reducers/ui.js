import { createAction, handleActions } from "redux-actions";

// Constants
export const PRELOAD_STATUS = new Map()
  .set("INITIAL", "INITIAL")
  .set("LOADING", "LOADING")
  .set("LOADED", "LOADED");

// Actions
export const preload = createAction("app/ui/PRELOAD");

// Default state
const defaultState = {
  preloaded: PRELOAD_STATUS.get("INITIAL")
};

// Selectors
export const preloadingStatusSelector = state => state.ui.preloaded;

// Reducer
const reducer = handleActions(
  {
    [preload]: (state, { payload }) => ({
      ...state,
      preloaded: payload
    })
  },
  defaultState
);

export default reducer;
