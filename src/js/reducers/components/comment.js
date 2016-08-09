import  {ADD_COMMENT, DELETE_COMMENT } from "js/constants/comment.js"

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

const Comment=(state=[],action)=>{
	switch (action.type){
		case ADD_COMMENT:
			return state.push(action);
		case DELETE_COMMENT:
			return delItem(state,action);
		default:
			return state;
	}
}

export default Comment