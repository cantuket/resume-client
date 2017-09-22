import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';
import _ from 'lodash'
import BigCalendar from 'react-big-calendar';
import events from './events';
import moment from 'moment'
require('react-big-calendar/lib/css/react-big-calendar.css');
import $ from 'jquery'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Col, Row} from 'react-grid-system';
import TimePicker from 'material-ui/TimePicker';
import Autocomplete from 'react-google-autocomplete';

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
BigCalendar.momentLocalizer(moment); // or globalizeLocalizer


class MyCalendar extends Component {
 
	componentWillMount() {
		this.props.fetchAllMeetings();
	}

	renderCalendar(){
		if (this.props.meetings.length) {
			var newMeetings = _.map(this.props.meetings, meeting =>{
				return ({
					title:meeting.title,
					start:new Date(meeting.start),
					end:new Date(meeting.end)
				});
			});

			return (
				<BigCalendar
			  selectable
		      defaultView='month'
		      events={newMeetings}
		      startAccessor='start'
		      endAccessor='end'
		      onView={event => console.log(event)}
	          defaultDate={new Date()}
	          // min={new Date()}
	          // components={calendarComponents}
	          onSelectEvent={event => alert(event)}
	          onSelectSlot={(slotInfo) => {
		          $('#scheduleForm').find('input[name="date"]').val(moment(slotInfo.start).format('MM/DD/YY'));
		          // alert(
		          //   `selected slot: \n\nstart ${moment(slotInfo.start).format('MM/DD/YY')} ` +
		          //   `\nend: ${slotInfo.end.toLocaleString()}`
			         //  )
		          }
		      }
		    />
		    );
		// }
	}
	}
	
  render(){
	return (
		<Row>
			<Col md={6}>
			<div>
				{
					this.renderCalendar()
				}
			</div>
			</Col>
		    <Col md={6}>
		    	<form style={{marginTop:'80px'}} name="scheduleForm" id="scheduleForm"
	        	onSubmit={
		             this.props.handleSubmit((e) => {
		              let values = $('#scheduleForm').serializeArray();

		              let newValues = {};
		              _.map(values, value => {
	              			return (
	              				newValues[value.name] = value.value
	              			);
		              })

		              if (!_.includes(newValues.startTime,':')) {
		              		var str = newValues.startTime,
							chars = str.split('');
							chars.splice(-3, 0, ':00');
							newValues.startTime = chars.join('');
		              } 

		               if (!_.includes(newValues.emdTime,':')) {
		              		var str = newValues.endTime,
							chars = str.split('');
							chars.splice(-3, 0, ':00');
							newValues.endTime = chars.join('');
		              } 

		              newValues.start =  new Date(moment(newValues.date +" "+ newValues.startTime)).toString();
		              newValues.end =  new Date(moment(newValues.date +" "+ newValues.endTime)).toString();

		              this.props.createMeeting(newValues, this.props.history);
		              $('#scheduleForm')[0].reset();
		              this.refs.startTime.setState({time:'',value: ''});
		              this.refs.endTime.setState({time:'',value: ''});
		            })
		        }
	        >
	        <Row>
	        	<input type="text" placeholder="date" name="date" />
	        	 <TimePicker
			      hintText="Start Time"
			      name="startTime"
			      ref="startTime"
			      // minutesStep="15"
			      // value={this.state.startTime} onChange={this.handleInputChange.bind(this)}
			    />
			    <TimePicker
			      hintText="End Time"
			      name="endTime"
			      ref='endTime'
			      
			      // value={this.state.endTime} onChange={this.handleInputChange.bind(this)}
			    />
			    <Autocomplete
				    style={{width: '90%'}}
				    onPlaceSelected={(place) => {
				      console.log(place);
				    }}
				    types={['address']}
				    name="location"
				    // componentRestrictions={{country: "us"}}
				/>
	        </Row>  
	          <FlatButton
	            label="Submit"
	            type="submit"
	            primary={true}
	            keyboardFocused={true}
	          />
	        </form>
	    </Col>
	  </Row>
	  );
	}
};

function mapStateToProps({meetings}) {
  console.log(meetings);
  return {
    meetings
  };
}

MyCalendar  = reduxForm({
  form: 'scheduleForm',
  enableReinitialize: true,
})(MyCalendar)

MyCalendar  = connect(mapStateToProps,actions)(withRouter(MyCalendar))

export default MyCalendar 