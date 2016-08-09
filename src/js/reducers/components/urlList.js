import  { ADD_ITEM, DELETE_ITEM, DELETE_ALL } from "js/constants/ListActionType.js"

const toItem= (action)=>{
	return {
		id:action.id,
		url:action.url,
		fileName:action.fileName
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

const urlList=(state=[],action)=>{
	switch (action.type){
		case ADD_ITEM:
			return state.push(action);
		case DELETE_ITEM:
			return delItem(state,action);
		default:
			return state;
	}
}

export default urlList