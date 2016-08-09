import style from "./style.less"
import React from "react"

class UrlList extends React.Component {
  render() {
    return (
    	<div className="m-url-list">
    		<ul className="url-list">
    			<li>
    			  <span className="url-name"> url:/v1/api/getList </span>
    			  <span className="file-name">fileName:getList.json</span>
    			  <span className="item-delete">删除</span>
    			</li>
    		</ul>
		</div>
	);
  }
}


export default UrlList;