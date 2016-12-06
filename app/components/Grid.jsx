import React from "react";
import {Link} from "react-router";

class Grid extends React.Component {
	render(){
        return (
            <div className="Grid">
                {JSON.stringify(this.props.posts)}
            </div>
        )
    }
}

export default Grid;
