import React from 'react';

class InputField extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<input
				type='text'
				value={this.props.value}
				onChange={this.props.onChange}
			/>
		);
	}
}

export default InputField;
