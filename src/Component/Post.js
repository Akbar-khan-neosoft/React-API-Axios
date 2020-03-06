import React, { Component } from 'react';
import DisplayPost from './DisplayPost';

class Post extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const style = {
			width: '70%',
			padding: '5px',
			border: '2px solid black',
			margin: '10px 15%',
		};
		return (
			<div>
				<section style={style}>
					<ul style={{ listStyle: 'none' }}>
						<DisplayPost
							click={this.props.click}
							key={this.props.id}
							id={this.props.id}
							username={this.props.username}
						/>
					</ul>
				</section>
			</div>
		);
	}
}

export default Post;
