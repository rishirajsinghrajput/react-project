import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import FormControls from '../components/FormControls/FormControls';
class Contact extends Component {
	render() {
		return(
			<div>
				<Navbar />
				<div className="container">
					<h1>Contact US</h1>
					<p>This is Contact US</p>
					<FormControls />		
				</div>
			</div>
		)
	}
}

export default Contact;