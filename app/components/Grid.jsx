import React from "react";

import Photo from "./Photo";

class Grid extends React.Component {
	render(){
        return (
            <div className="photo-grid">
                {this.props.posts.map((post,i)=><Photo post={post} comments={this.props.comments} key={i}></Photo>)}
            </div>
        )
    }
}

export default Grid;
