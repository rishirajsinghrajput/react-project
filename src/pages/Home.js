import React, { Component } from 'react';
import Navbar from '../components/Navbar.js'
import Carousal from '../components/carousal/Carousal';

import LeadersList from '../components/leaders/LeadersList';
class Home extends Component {
	render() {
		return(

			<div>
				<Navbar />
				<Carousal />
				<div className="container">
					<h1>Our Greate Personalities</h1>
					<p>Indian greate Personalities</p>
				</div>

				<div className="container">
					<div className="userlist">
						<ul>
							<LeadersList name="Mahatama Gandhi" image="mahatama-gandhi.jpg" title="He was Father Of the Nation"/>
							<LeadersList name="Narendra Modi" image="modi.png" title = "He is Indian current Primeminister"/>
							<LeadersList name= "Sachin Tendulkar" image="sachin.jpg" title="He is a crocketer"/>
							<LeadersList name = "Lata Mangeskar" image="lata.jpg" title="She is a great Singer"/>
						</ul>
					</div>
				</div>

			</div>
		);
	}
}

export default Home;