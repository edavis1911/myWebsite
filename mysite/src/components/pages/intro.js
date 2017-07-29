import React, { Component } from 'react';
import $ from 'jquery';

class Intro extends Component {
	render() {
		return (
			<section className="hero overlay" data-stellar-background-ratio="0.3">
			<div className='content'>
			<h1>Ernest C. Davis</h1>
			<h3>Technical Trainer | Instructional Designer| Web Developer</h3>
			</div>
			</section> 
			
			);
	}

// componentDidMount() {
//   $stellar()
// }

// componentWillUnmount() {
//   $stellar("destroy");
// }

}


export default Intro;