import React, { Component } from 'react';
import Navbar from '../components/Navbar';
class About extends Component {
	render(){
		return(
			<div>
				<Navbar />
				<div className="container">
					<h1>About</h1>
					<p>This is about us page</p>
				</div>
			</div>
		);
	}

}

export default About;