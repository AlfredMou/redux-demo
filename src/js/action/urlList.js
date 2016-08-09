import  { ADD_ITEM, DELETE_ITEM, DELETE_ALL } from "js/constants/ListActionType.js"

export default addItem = (options)=>{
	return {
		type:ADD_ITEM,
		options
	}
}
export default deleteItem = (id)=>{
	return {
		type:DELETE_ITEM,
		id:id
	}
}