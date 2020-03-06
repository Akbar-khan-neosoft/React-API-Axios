import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';
import '../App.css';

class Blog extends Component {
	state = {
		post: [],
		flag: false,
		body: '',
	};
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts').then(result => {
			this.setState({ post: result.data });
		});
	}

	onClickHandle = id => {
		console.log(id);
		let postIndex = this.state.post.findIndex(result => {
			return result.id === id;
		});
		this.setState({ body: this.state.post[postIndex].body });
		this.setState({ flag: true });
	};

	render() {
		let postDetails;
		let posts = this.state.post.map(result => {
			return <Post click={this.onClickHandle} key={result.id} id={result.id} title={result.title} />;
		});

		if (this.state.flag === true) {
			postDetails = this.state.body;
		} else {
			postDetails = '';
		}
		const style = {
			width: '50%',
			height: '400px',
			padding: '10px',
			border: '5px solid black',
			margin: '10px',
			overflow: 'scroll',
		};

		return (
			<main className="main">
				<div style={style}>{posts}</div>
				<div style={style}>{postDetails}</div>
			</main>
		);
	}
}

export default Blog;
