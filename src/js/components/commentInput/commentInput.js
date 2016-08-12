import style from "./commentInput.less"
import React from "react"

class CommentInput extends React.Component {
  static defaultProps={
    commentContext:"",
    author:null
  }
  constructor(props){
    super(props);
    this.state={
      commentContext:this.props.commentContext,
      isOver:false
    }
  }
  onTextareaChange(event){
    if(event.target.value.length>300){
      this.setState({isOver:true})
    }else{
      this.setState({isOver:false})
    }
  }
  onCommentPub(event){
    let textArea=this.getDOMNode("comment-input"),
        commentContent=textArea.value.trim();
    if(author==null){
      alert("用户未登陆");
    }
    if(commentContent.length>0&&commentContent.length<300){
      if(this.props.addComment instanceof Function){
         this.props.addComment({
            author:this.props.author,
            content:commentContent
         })
      }
    }
  }
  render() {
    var {commentContext,isOver}=this.state,showError="";
    if(isOver){
      showError=(<span className="error-show">评论字数不得超过300字</span>)
    }
    return (
    	<div className="m-comment-input">
        <h3>评论发表:</h3>
    		<div className="comment-input">
          <textarea ref="comment-input" onChange={this.onTextareaChange.bind(this)} defaultValue={commentContext}></textarea>
        </div>
        <p className="del-block">{showError}<button onClick={this.onCommentPub.bind(this)} type="button">发表</button></p>
		</div>);
  }
}

//console.log(CommentList);
export default CommentInput;