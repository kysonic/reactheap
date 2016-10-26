import uuid from 'uuid';

import TodoActions from '../actions/TodoActions';


export default class TodoStore {
	constructor() {
		this.bindActions(TodoActions);

		this.todos = [];
	}
	create(todo) {
		this.setState({
			todos: this.todos.concat(todo)
		});
	}
	update(updatedTodo) {
		this.setState({
			todos: this.todos.map(todo => {
				if(todo.id === updatedTodo.id) {
					return Object.assign({}, todo, updatedTodo);
				}
				return todo;
			})
		});
	}
	delete(id) {
		this.setState({
			todos: this.todos.filter(todo => todo.id !== id)
		});
	}
}
