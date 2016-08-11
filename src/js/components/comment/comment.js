import style from "./comment.less"
import React from "react";
import CommentInput from "../commentInput/commentInput.js";
import CommentList from "../commentList/commentList.js";
import { connect } from 'react-redux';
import * as ComponentActions from 'js/action/comment.js';
import { bindActionCreators } from 'redux';


class Comment extends React.Component {
  static defaultProps={
    
  }
  constructor(props){
    super(props);
  }
  render() {
  	var actions=this.props.actions;
  	
    return (
    	<div>
			<CommentInput commentContext="呵呵" addComments={actions.addItem}/>
    		<CommentList comments={this.props.comments}/>
    	</div>	
	)	
  }
}
 

export default connect(state => ({
	comments:state.comments
}), dispatch => ({
     actions: bindActionCreators(ComponentActions, dispatch)
}))(Comment);

