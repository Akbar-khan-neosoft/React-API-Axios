import React, { Component } from 'react';

class DisplayPost extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<li
				onClick={() => {
					this.props.click(this.props.id);
				}}
			>
				{this.props.username}
			</li>
		);
	}
}
export default DisplayPost;
