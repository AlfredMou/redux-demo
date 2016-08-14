import style from "./articleContent.less"
import React from "react";
import { connect } from 'react-redux';
import * as ComponentActions from 'js/action/article.js';
import { bindActionCreators } from 'redux';


class Article extends React.Component {
  static defaultProps={
      actionsMoke:{
        article:{
          content:'',
          author:"牟金涛",
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
  addItemToList(options){
    var {id,name}=options.author;
    this.props.actions.addItem({
      id:id,
      author:name,
      content:options.content
    });
  }
  isSuportOrNO(){
    //判断是否已点赞
    if(this.props.article.isSuport){
      return (<div className="suport-warp has-suport" onClick={this.suportToThisArticle.bind(this)}>点赞 {this.props.article.suport}</div>)
    }else{
      return (<div className="suport-warp no-suport" onClick={this.suportToThisArticle.bind(this)}>点赞 {this.props.article.suport}</div>)
    }
  }
  suportToThisArticle(){
     //判断是否已点赞
    if(!this.props.article.isSuport){
      this.props.actions.addSupport();
    }else{
      this.props.actions.delSupport();
    }
  }
  render() {
    return (
    	<div className="art-content" artId={this.props.article.id}>
  			<h3>{this.props.article.title}</h3>
        <p className="author-mes">作者：{this.props.article.author}     发表时间:{this.props.article.date}</p>
        <div className="content" dangerouslySetInnerHTML={{__html:this.props.article.content}}></div>
        {this.isSuportOrNO()}
    	</div>	
	)	
  }
}
 

export default connect(state => ({
	article:state.article,
  author:state.user
}), dispatch => ({
     actions: bindActionCreators(ComponentActions, dispatch)
}))(Article);