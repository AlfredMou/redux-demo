import style from "./userBar.less"
import React from "react";
import { connect } from 'react-redux';
import * as ComponentActions from 'js/action/user.js';
import { bindActionCreators } from 'redux';

class UserBar extends React.Component {
  static defaultProps={
      actionsMoke:{
        article:{
          content:'',
          author:"defult user",
          date:"2016-8-14",
          suport:200,
          id:"sd12132ass23a213",
          title:"asddsew"
        }
      }
  }
  constructor(props){
    super(props);
  }
  render() {
    return (
    	<div className="art-content" artId={this.props.author.id}>
        <p className="author-mes">
          用户：{this.props.author.name}
          <button onClick={this.props.actions.exitOut}>退出</button>
        </p>
    	</div>	
	)	
  }
}
 

export default connect(state => ({
  author:state.user
}), dispatch => ({
     actions: bindActionCreators(ComponentActions, dispatch)
}))(UserBar);