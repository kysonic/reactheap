import React from 'React';
import Todo from './Todo.jsx';
import Editable from './Editable.jsx';

export default ({todos,onEdit=()=>{},onDelete=()=>{},onCreate=()=>{},onActivateEditing=()=>{}})=>{
	return (
		<div className="Todos">
			<ul>
				{todos.map(({id,task,editing})=>(
					<li key={id} className="todo-item">
						<Todo onClick={onActivateEditing.bind(null,id)}>
							<Editable
								editing={editing}
								value={task}
								onEdit={onEdit.bind(null,id)}
								className="editable"
								/>
							<button onClick={onDelete.bind(null,id)}>X</button>
						</Todo>
					</li>
				))}
			</ul>
			<button onClick={onCreate.bind(null)}>+</button>
		</div>
	)
}
