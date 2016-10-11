import React from 'react';
import Note from './Note.jsx';
import Editable from './Editable.jsx';

import classnames from 'classnames';

export default ({notes,onDelete=()=>{}, onEdit=()=>{}, onNoteClick=()=>{} }) => {
	return (
		<ul className="Notes">{notes.map(({id,editing,task}) =>
				<li key={id} className="Note">
					<Note onClick={onNoteClick.bind(null,id)} >
						<Editable
							editing={editing}
							value={task}
							onEdit={onEdit.bind(null,id)}
							className="editable"
							/>
						<button className={classnames('delete',editing?'hidden':'')} onClick={onDelete.bind(null,id)}>X</button>
					</Note>
				</li>
		)}</ul>
	)
}
