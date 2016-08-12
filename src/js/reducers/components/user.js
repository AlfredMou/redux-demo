import  {CHANGE_USER, EXITE_OUT } from "js/constants/user.js";

console.log(window.xx);
let GetUserMessage=window.xx.userMessage||null;


const User=(state=GetUserMessage,action)=>{
	switch (action.type){
		case CHANGE_USER:
			return {
				id:action.id,
				name:action.name
			};
		case EXITE_OUT:
			return null;
		default:
			return state;
	}
}
export default User