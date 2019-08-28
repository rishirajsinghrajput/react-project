import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Carousal.css';
class Carousal extends Component {
	render() {
		return(
			<div>
				<div id="myCarousel" className="carousel slide" data-ride="carousel">
				    <ol className="carousel-indicators">
				      <li data-target="#myCarousel" data-slide-to="0" className=""></li>
				      <li data-target="#myCarousel" data-slide-to="1" className="active"></li>
				      <li data-target="#myCarousel" data-slide-to="2" className=""></li>
				    </ol>
				    <div className="carousel-inner">
				      <div className="carousel-item">
				        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"></rect></svg>
				        <div className="container">
				          <div className="carousel-caption text-left">
				            <h1>Example headline.</h1>
				            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
				            <p><Link className="btn btn-lg btn-primary" to="#" role="button">Sign up today</Link></p>
				          </div>
				        </div>
				      </div>
				      <div className="carousel-item active">
				        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"></rect></svg>
				        <div className="container">
				          <div className="carousel-caption">
				            <h1>Another example headline.</h1>
				            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
				            <p><Link className="btn btn-lg btn-primary" to="#" role="button">Learn more</Link></p>
				          </div>
				        </div>
				      </div>
				      <div className="carousel-item">
				        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"></rect></svg>
				        <div className="container">
				          <div className="carousel-caption text-right">
				            <h1>One more for good measure.</h1>
				            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
				            <p><Link className="btn btn-lg btn-primary" to="#" role="button">Browse gallery</Link></p>
				          </div>
				        </div>
				      </div>
				    </div>
				    <Link className="carousel-control-prev" to="#myCarousel" role="button" data-slide="prev">
				      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
				      <span className="sr-only">Previous</span>
				    </Link>
				    <Link className="carousel-control-next" to="#myCarousel" role="button" data-slide="next">
				      <span className="carousel-control-next-icon" aria-hidden="true"></span>
				      <span className="sr-only">Next</span>
				    </Link>
			  	</div>
			</div>
		)
	}
}


export default Carousal;
