import React from 'react';
import classnames from 'classnames';


const Editable = ({editing, value, onEdit, className, ...props}) => {
	if(editing) {
		return <Editable.Edit value={value} className={className} onEdit={onEdit} {...props} />;
	}

	return <Editable.Value value={value} />
}

Editable.Value = ({className,value,...props})=>(<span className={classnames('value', className)} {...props}>{value}</span>)

class Edit extends React.Component {
	render() {
		const {className,value, ...props} = this.props;

		return <input
			type="text"
			autoFocus={true}
			defaultValue={value}
			onBlur={this.finishEdit}
			onKeyPress={this.checkEnter}
			className={classnames('edit', className)}

			/>;
	}
	checkEnter = (e) => {
		if(e.key === 'Enter') {
			this.finishEdit(e);
		}
	}
	finishEdit = (e) => {
		const value = e.target.value;

		if(this.props.onEdit) {
			this.props.onEdit(value);
		}
	}
}

Editable.Edit = Edit;

export default Editable;
