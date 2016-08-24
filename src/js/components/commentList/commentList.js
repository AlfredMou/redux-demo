import style from "./commentList.less"
import React from "react"

class CommentList extends React.Component {
  static defaultProps={
    comments:[{name:"用户1",comment:"第一条评论",date:"2012-1-21 16:56"}]
  }
  constructor(props){
    super(props);
    this.state={
      comments:this.props.comments.slice(0)
    }
  }
  render() {
    var {comments}=this.props;
    return (
    	<div className="m-url-list">
        <h3>评论:</h3>
    		<ul className="url-list">
            {comments.map(value=>{
                return <li>
                            <p className="author">{value.author}</p>
                            <p className="content">{value.content}</p>
                            <p className="date">{value.date}</p>
                       </li>
            })}
    		</ul>
		</div>
	);}
}

export default CommentList;