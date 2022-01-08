import { createStore, combineReducers } from "redux";

import registerReducer from "../reducers/registerReducer";

const rootReducer = combineReducers(
  { register: registerReducer }
)

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
