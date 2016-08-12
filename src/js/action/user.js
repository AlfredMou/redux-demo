/**
 * 用户action接口定义
 * {
 * 		id:"用户id"
 * 		name:"用户名"
 * }
 */
import  {CHANGE_USER, EXITE_OUT } from "js/constants/user.js"

/**
 * 切换用户
 * @param  {[type]} changeUser [description]
 * @return {[type]}            [description]
 */
export const changeUser=>(options){
	return dispatch => {
       setTimeout(() => dispatch({
       	type: CHANGE_USER,
       	options
       }), 1000)
    }
}
/**
 * 退出
 * @param  {[type]} exitOut [description]
 * @return {[type]}         [description]
 */
export const exitOut=>(options){
	return dispatch => {
       setTimeout(() => dispatch({
       	type: EXITE_OUT
       }), 1000)
    }
}