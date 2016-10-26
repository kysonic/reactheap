import React from 'react';
import connect from 'connect-alt';
import uuid from 'uuid';

import Todos from './Todos.jsx';
import TodoActions from '../actions/TodoActions.js';

@connect('todo')
class App extends React.Component {
	static propTypes = { todoStore: React.PropTypes.object.isRequired }
	addTodo(){
		TodoActions.create({
			id: uuid.v4(),
			task: 'New task'
		});
	}
	removeTodo(id){
		TodoActions.delete(id);
	}
	updateTodo(id,task){
		TodoActions.update({id, task, editing: false});
	}
	activateEditing(id) {
		TodoActions.update({id, editing: true});
	}
	render() {
		const { todoStore: {todos} } = this.props;
		return (
			<Todos todos={todos} onCreate={this.addTodo} onDelete={this.removeTodo} onActivateEditing={this.activateEditing} onEdit={this.updateTodo} />
		);
	}
}

export default App;



