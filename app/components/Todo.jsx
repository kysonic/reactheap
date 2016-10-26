import React from 'React';

export default ({children,...props})=>{
	return (
		<div {...props}>
			{children}
		</div>
	)
}
