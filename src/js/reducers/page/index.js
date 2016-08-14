import { combineReducers } from 'redux';
//import urlList from "../components/urlList.js";
import comments from "../components/comment.js";
import user from "../components/user.js";
import article from "../components/article.js";

const rootReducer = combineReducers({
  comments,user,article
});
 
export default rootReducer;