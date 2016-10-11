import React from 'react';
import Note from './Note.jsx';
import Editable from './Editable.jsx';

export default ({notes,onDelete=()=>{}, onEdit=()=>{}, onNoteClick=()=>{} }) => {
	return (
		<ul>{notes.map(({id,editing,task}) =>
				<li key={id}>
					<Note onClick={onNoteClick.bind(null,id)} >
						<Editable editing={editing} value={task} onEdit={onEdit.bind(null,id)}></Editable>
						<button onClick={onDelete.bind(null,id)}>X</button>
					</Note>
				</li>
		)}</ul>
	)
}
