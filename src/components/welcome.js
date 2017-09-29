import React from 'react'
import * as actions from '../actions'
import {connect}from 'react-redux'
import {Row, Col} from 'react-grid-system'
import draftToHtml from 'draftjs-to-html'

class Welcome extends React.Component {
  	
  	renderBody(){
  		if (this.props.authenticated) {
  			let userData = JSON.parse(localStorage.getItem('userData'));
  			return (
				<div>
					<Row>
						<Col md={6}>
							{/* <h1>Welcome</h1> */}
						</Col>
						<Col className="job-info" md={6}>
							{/* <h5>For: {userData.organization}</h5> */}
							<img style={{marginTop:'30px'}} src={userData.logo} alt="" width="200px"/>		
							<a href={userData.jobPost}>{userData.position}</a>
						</Col>
					</Row>
					<Row>
						<h5>Hi {userData.contactName},</h5>
						<div dangerouslySetInnerHTML={{ __html: draftToHtml(userData.coverLetter) }} />
						<p>
						Regards,<br/>
						Kyle Germaine
						</p>

						<p style={{fontSize:'.9rem'}}>
							(630) 605 - 3642 |&nbsp;
							kyle@endbehavior.com |&nbsp;
							<a href="https://www.linkedin.com/in/kylegermaine/" target="_blank">LinkedIn</a>
						</p>
					</Row>
				</div>
			);
  		} else {
  			// request form
  			// hello msg
  			return (
  				<h1>Not auth</h1>
			);
  		}
  	}

	render () {
	  return (
	    <Row>
	    	{this.renderBody()}
	    </Row>
	  );
	}
}


function mapStateToPrpos (state){
	return {
		authenticated: state.auth.authenticated
	}
}

Welcome = connect(mapStateToPrpos,actions)(Welcome)

export default Welcome