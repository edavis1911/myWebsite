import React, { Component } from 'react';
import $ from 'jquery';

class Summary extends Component {
	render() {
		return (
			<section className="wrapper">
			<div className='content'>
			<h2> Professional Summary</h2>
			<ol>
				<li className="left">
				Technical Trainer with 11 years of experience facilitating trainings for enterprise, proprietary, and commercial over the counter systems
				</li>
			<li className="left">
				Instructional Designer with 11 years of experience creating training materials for E-Learning, Instructor-Led, Computer Based, Train-the-Trainer, and Web Based learning modalities.
				</li>
				<li className="left">
				Eight years of experience creating instructional content with SCORM and Section 508 compliance
				</li>
				<li className="left">
				Eight years of experience supporting the Software Development Lifecycle for enterprise level technology initiatives
				</li>
				<li className="left">
					Microsoft Certified Professional
				</li>
			</ol>
			
			</div>
			</section> 
			
			);
	}

}


export default Summary;

