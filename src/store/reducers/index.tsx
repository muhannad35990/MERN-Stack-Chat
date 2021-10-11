import { combineReducers } from "redux";
import chat from "./chat";
import auth from "./auth";
import alert from "./alert";
const rootReducer = combineReducers({
  auth,
  chat,
  alert,
});

export default rootReducer;
