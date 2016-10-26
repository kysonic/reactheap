import React from 'react';
import Lanes from './Lanes.jsx';
// Libs
import uuid from 'uuid';
import connect from '../libs/connect.jsx';
// Actions
import LaneActions from '../actions/LaneActions.js';

const App = ({LaneActions,lanes})=>{
	const addLane = ()=>{
		LaneActions.create({
			id: uuid.v4(),
			name: 'New lane'
		});
	}

	return (
		<div>
			<button className="add-lane" onClick={addLane}>+</button>
			<Lanes lanes={lanes} />
		</div>
	);
}

export default connect(({lanes}) => ({
	lanes
}), {
	LaneActions
})(App)
