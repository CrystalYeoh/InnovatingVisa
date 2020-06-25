import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addUrl = (url) => ({
  type: ActionTypes.ADD_URL,
  payload: url,
});

export const postUrl = (
  url,
  headertext,
  headersubtext,
  bodytext,
  bodyimages,
  footerlinks,
  footertext,
  socialmediatypes,
  socialmedialinks
) => (dispatch) => {
  const newUrl = {
    url: url,
    headertext: headertext,
    headersubtext: headersubtext,
    bodytext: bodytext,
    bodyimages: bodyimages,
    footertext: footertext,
    socialmediatypes: socialmediatypes,
    socialmedialinks: socialmedialinks,
  };

  return fetch(baseUrl + "newUrl", {
    method: "POST",
    body: JSON.stringify(newUrl),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addUrl(response)))
    .catch((error) => {
      console.log("post url", error.message);
      alert("Your url could not be posted\nError: " + error.message);
    });
};
export const fetchUrls = () => (dispatch) => {
  dispatch(urlsLoading());

  return fetch(baseUrl + "urls")
    .then((response) => response.json())
    .then((urls) => dispatch(addUrls(urls)));
};

export const urlsLoading = () => ({
  type: ActionTypes.URLS_LOADING,
});

export const urlsFailed = (errmess) => ({
  type: ActionTypes.URLS_FAILED,
  payload: errmess,
});

export const addUrls = (urls) => ({
  type: ActionTypes.ADD_URLS,
  payload: urls,
});

export const fetchUsers = () => (dispatch) => {
  dispatch(usersLoading());

  return fetch(baseUrl + "users")
    .then((response) => response.json())
    .then((users) => dispatch(addUrls(users)));
};

export const usersLoading = () => ({
  type: ActionTypes.USERS_LOADING,
});

export const usersFailed = (errmess) => ({
  type: ActionTypes.USERS_FAILED,
  payload: errmess,
});

export const addUsers = (users) => ({
  type: ActionTypes.ADD_USERS,
  payload: users,
});
