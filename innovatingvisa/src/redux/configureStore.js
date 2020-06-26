import { createStore, combineReducers, applyMiddleware } from "redux";
import { Urls } from "./urls";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createForms } from "react-redux-form";
import { InitialUrlform } from "./urlcreation";
import { Users } from "./users";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      urls: Urls,
      users: Users,
      ...createForms({
        Urlform: InitialUrlform,
      }),
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
