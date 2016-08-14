import  {ADD_SUPPORT, DEL_SUPPORT } from "js/constants/article.js"
/**options数据结构{
*	id:"文章id"，
*	content:文章内容，
*	author:文章作者
*	date:发布时间
*	suport:点赞数
*	title:"文章名",
*	isSuport:true or false //是否已点赞
*}
**/

export const addSupport = (options)=>{
	return  dispatch => {
       setTimeout(() => dispatch({
       	type:ADD_SUPPORT
       }), 100)
    }
}

export const delSupport = (id)=>{
	return dispatch => {
       setTimeout(() => dispatch({
       	type:DEL_SUPPORT
       }), 100)
    }
}