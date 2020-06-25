import * as ActionTypes from "./ActionTypes";

export const Urls = (state = { errMess: null, urls: [] }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_URL:
      return { ...state, errMess: null, urls: action.payload };

    case ActionTypes.URLS_FAILED:
      return { ...state, errMess: action.payload };

    case ActionTypes.ADD_URLS:
      var url = action.payload;

      return { ...state, urls: state.urls.concat(url) };

    default:
      return state;
  }
};
