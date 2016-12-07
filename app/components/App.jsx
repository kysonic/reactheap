import React from "react";
import {Link} from "react-router";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actionCreators from "../actions/actionCreators";


function mapStateToProps(state){
	return {
		posts: state.posts,
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators,dispatch);
}

@connect(mapStateToProps,mapDispatchToProps)
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<h1>
					<Link to="/">Reduxstagram</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
}

export default App;



