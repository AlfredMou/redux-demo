import  {ADD_COMMENT, DELETE_COMMENT } from "js/constants/comment.js"
/**options数据结构{
*	id:"评论id"，
*	content:评论内容，
*	author:评论作者
*	date:评论时间
*}
**/

export const addItem = (options)=>{
	return  dispatch => {
       setTimeout(() => dispatch({
       	type: ADD_ITEM,
       	options
       }), 1000)
    }
}

export const deleteItem = (id)=>{
	return {
		type:DELETE_ITEM,
		id:id
	}
}