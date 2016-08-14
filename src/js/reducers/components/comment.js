import  {ADD_COMMENT, DELETE_COMMENT } from "js/constants/comment.js";
import Immutable from 'immutable';

const actionToItem=(action)=>{
	let {id,content,author,date}=action;
	return {
		id:id,
		content:content,
		author:author,
		date:date
	}
}

const delItem = (state,action)=>{
	const noSameId=(elem,index)=>{
		if(elem.id==action.id){
			return false;
		}else{
			return true;
		}
	}

	return state.filter(noSameId)
}

const Comment=(state=[{id:"1",content:"我是第一条评论",author:"牟金涛",date:"2016-8-11 17:46"}],action)=>{
	switch (action.type){
		case ADD_COMMENT:
			state.push(actionToItem(action));
			return state.slice(0);
		case DELETE_COMMENT:
			return delItem(state,action);
		default:
			return state;
	}
}

export default Comment