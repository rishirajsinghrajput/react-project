import React, { Component } from 'react';

class FormControls extends Component {

	constructor(props) {
		super(props);
		this.state = {
			fullname: 'Rishi',
			email: 'rishi@gmail.com',
			message: 'Write your message here...'
		}
	}

	/*handlename = (event) => {
		this.setState({fullname:event.target.value});
	}
	handleemail = (event) => {
		this.setState({email: event.target.value})
	}
	handlemessage = (event) => {
		this.setState({message: event.target.value})
	}*/

	handleinput = (event) => {
		this.setState({[event.target.name]: event.target.value});
	}

	handleform = (event) => {
		event.preventDefault();
		/*alert(`My Name is ${this.state.fullname}. 
			My Email is ${this.state.email}. 
			Message is ${this.state.message}`
		);*/

		alert(JSON.stringify(this.state));


	}

	render(){
		return(
			<div className="col-md-8 offset-md-2">
				<form onSubmit= {this.handleform}>
					<div className="form-group">
					    <label for="fullname">Full Name</label>
					    <input type="text" name="fullname" className="form-control" value={this.state.fullname} onChange={this.handleinput} />
					  </div>		
					  <div className="form-group">
					    <label for="email">Email address</label>
					    <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleinput} />
					  </div>
					  <div className="form-group">
					    <label for="message">Message</label>
					    <textarea className="form-control" name="message" value={this.state.message} onChange={this.handleinput}></textarea>
					  </div>
					 
					  <button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}

export default FormControls;