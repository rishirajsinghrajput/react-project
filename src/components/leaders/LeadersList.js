import React, { Component } from 'react';
import './Leaders-style.css';

class LeadersList extends Component {
	render() {
		return(
			<li>
				<div className="d-flex align-items-center">
					<img src={require('../../img/'+this.props.image)} />
					<div className="userlist-content">	
						<h3>{this.props.name}</h3>
						<p>{this.props.title}</p>
					</div>
				</div>	
			</li>
		);
	}
}

export default LeadersList;