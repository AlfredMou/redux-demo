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
  exitOut(){
      console.log(this);
      this.props.actions.exitOut();
  }
  getUserMessageDom(){
      if(this.props.author){
          return (
              <div className="user-part " artId={this.props.author.id}>
                  <p className="author-mes f-cb">
                      <span className="author-name">用户：{this.props.author.name}</span>
                      <button className="user-btn login-out" onClick={this.exitOut.bind(this)}>退出</button>
                  </p>
              </div>
          )
      }else{
          return(
              <div className="user-part">
                  <p className="author-mes f-cb">
                      <span className="author-name">用户尚未登录</span>
                      <button className="user-btn login-in">登录</button>
                  </p>
              </div>
          )
      }
  }
  render() {
    return (
        this.getUserMessageDom()
	)	
  }
}

export default connect(state => ({
  author:state.user
}), dispatch => ({
     actions: bindActionCreators(ComponentActions, dispatch)
}))(UserBar);