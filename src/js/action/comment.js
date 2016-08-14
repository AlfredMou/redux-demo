import  {ADD_COMMENT, DELETE_COMMENT } from "js/constants/comment.js"
/**options数据结构{
*	id:"评论id"，
*	content:评论内容，
*	author:评论作者
*	date:评论时间
*}
**/

const getDateTime=()=>{
	let nowTime =new Date();
	return nowTime.getFullYear()+"-"+(nowTime.getMonth()+1)+"-"+nowTime.getDate()+"  "+nowTime.getHours()+":"+nowTime.getMinutes()
}

export const addItem = (options)=>{
	let {id,content,author}=options,date=getDateTime();
	return  dispatch => {
       setTimeout(() => dispatch({
       	type:ADD_COMMENT,
       	date,id,content,author
       }), 100)
    }
}

export const deleteItem = (id)=>{
	return {
		type:DELETE_COMMENT,
		id:id
	}
}