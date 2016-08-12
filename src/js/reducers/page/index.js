import { combineReducers } from 'redux';
//import urlList from "../components/urlList.js";
import comments from "../components/comment.js";
import user from "../components/user.js";

const rootReducer = combineReducers({
  comments,user
});
 
export default rootReducer;