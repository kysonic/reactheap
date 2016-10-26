import React from 'react';
import Lanes from './Lanes.jsx';
// Libs
import uuid from 'uuid';
import connect from '../libs/connect.jsx';
import {compose} from 'redux';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
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


export default compose(
	DragDropContext(HTML5Backend),
	connect(({lanes}) => ({
		lanes
	}), {
		LaneActions
	})
)(App)
