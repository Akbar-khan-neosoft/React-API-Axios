import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';
import '../App.css';

class Blog extends Component {
	state = {
		post: [],
		flag: false,
		name: '',
		userId: '',
		email: '',
		street: '',
		suite: '',
		city: '',
		zipcode: '',
		phone: '',
		website: '',
		companyName: '',
	};
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users').then(result => {
			this.setState({ post: result.data });
		});
	}

	onClickHandle = id => {
		console.log(id);
		let postIndex = this.state.post.findIndex(result => {
			return result.id === id;
		});
		this.setState({
			userId: this.state.post[postIndex].id,
			name: this.state.post[postIndex].name,
			email: this.state.post[postIndex].email,
			street: this.state.post[postIndex].address.street,
			suite: this.state.post[postIndex].address.suite,
			city: this.state.post[postIndex].address.city,
			zipcode: this.state.post[postIndex].address.zipcode,
			phone: this.state.post[postIndex].phone,
			website: this.state.post[postIndex].website,
			companyName: this.state.post[postIndex].company.name,
			flag: true,
		});
	};

	render() {
		let name, userId, email, street, suite, city, zipcode, phone, website, companyName;
		let posts = this.state.post.map(result => {
			return <Post click={this.onClickHandle} key={result.id} id={result.id} username={result.username} />;
		});

		if (this.state.flag === true) {
			userId = this.state.userId;
			name = this.state.name;
			email = this.state.email;
			street = this.state.street;
			suite = this.state.suite;
			city = this.state.city;
			zipcode = this.state.zipcode;

			phone = this.state.phone;
			website = this.state.website;
			companyName = this.state.companyName;
		} else {
			userId = '';
			name = '';
			email = '';
			street = '';
			suite = '';
			city = '';
			zipcode = '';
			phone = '';
			website = '';
			companyName = '';
		}
		const postStyle = {
			width: '90%',
			height: '400px',
			padding: '10px',
			border: '5px solid black',
			margin: '10px',
			overflow: 'scroll',
		};
		const bodyStyle = {
			width: '90%',
			height: '400px',
			padding: '10px',
			border: '5px solid black',
			margin: '10px',
			overflow: 'scroll',
			textalign: 'left',
		};
		const style = {
			width: '95%',
			padding: '10px',
			border: '5px solid black',
			margin: '10px',
			textalign: 'right',
		};
		const headingStyle = {
			width: '90%',
			padding: '10px',
			border: '5px solid black',
			margin: '10px',
			textAlign: 'center',
			fontWeight: 'bold',
			fontSize: '30px',
		};

		return (
			<main className="main">
				<div style={style}>
					<div style={headingStyle}>User Names</div>
					<div style={postStyle}>{posts}</div>
				</div>
				<div style={style}>
					<div style={headingStyle}>User Detail</div>
					<div style={bodyStyle}>
						<span style={{ color: 'Light blue', font: 'bold', fontSize: '20px' }}>User ID : </span>
						{userId}
						<br></br>
						<span style={{ color: 'Light blue', font: 'bold', fontSize: '20px' }}>Name : </span>
						{name}
						<br></br>
						<span style={{ color: 'Light blue', font: 'bold', fontSize: '20px' }}>Email ID : </span>
						{email}
						<br></br>
						<span style={{ color: 'Light blue', font: 'bold', fontSize: '20px' }}>Address : </span>{' '}
						<br></br>
						<span style={{ color: 'blue', fontSize: '15px' }}>Street : </span>
						{street} <br></br>
						<span style={{ color: 'blue', fontSize: '15px' }}>Suite : </span>
						{suite} <br></br>
						<span style={{ color: 'blue', fontSize: '15px' }}>City : </span>
						{city} <br></br>
						<span style={{ color: 'blue', fontSize: '15px' }}>Zipcode : </span>
						{zipcode}
						<br></br>
						<span style={{ color: 'Light blue', font: 'bold', fontSize: '20px' }}>Phone : </span>
						{phone}
						<br></br>
						<span style={{ color: 'Light blue', font: 'bold', fontSize: '20px' }}>Website : </span>
						{website}
						<br></br>
						<span style={{ color: 'Light blue', font: 'bold', fontSize: '20px' }}>Company Name : </span>
						{companyName}
					</div>
				</div>
			</main>
		);
	}
}

export default Blog;
