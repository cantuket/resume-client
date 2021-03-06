import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import * as actions from '../../actions'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import { renderTextField } from './form_helpers'
import _ from 'lodash'
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import $ from 'jquery'

const signupFields = [
    {name:'email',placeholder:'username',type:'text'},
    {name:'password',placeholder:'password',type:'password'},
    {name:'passwordConfirmation',placeholder:'confirm passwrod',type:'text'},
    {name:'organization',placeholder:'company',type:'text'},
    {name:'contactName',placeholder:'contact',type:'text'},
    {name:'logo',placeholder:'logo',type:'text'},
    {name:'realEmail',placeholder:'email',type:'text'},
    {name:'jobPost',placeholder:'job post',type:'text'},
    {name:'position',placeholder:'position',type:'text'},
];

const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

class SignupForm extends Component {
  constructor(props) {
    super(props);
    const contentState = convertFromRaw(content);
    this.state = {
      contentState,
    }
  }

  onContentStateChange: Function = (contentState) => {
    console.log(contentState);
    this.setState({
      contentState,
    });
  };

  renderAlert() {
    if (this.props.errorMessage) {
      return <div className="alert alert-danger">
        <strong>Oops: </strong>{this.props.errorMessage}
      </div>
    }
  }

  renderFields () {
      return _.map(signupFields, (field, i) => {
          return (
            <div className="col m6">
             <Field
             className="col m6"
              key={i}
              label={field.name}
              name={field.name}
              component={renderTextField}
              type={field.type}
              placeholder={field.placeholder}
              />
            </div>
          );
      });
  }

  render() {

    return (
      <div style={{marginTop:'80px'}}>
        {this.renderAlert()}
        {/* <form onSubmit={handleSubmit}> */}
        <form id="signup" onSubmit={(e)=> {
            e.preventDefault();
            let values = $('#signup').serializeArray();
            let newValues = {};
            _.map(values, value => {
                return (
                  newValues[value.name] = value.value
                );
            })
            newValues.coverLetter = this.state.contentState;
            this.props.signupUser(newValues);
            let loginUrl = `http://resume.endbehavior.com/cool-company?user=${newValues.email}&password=${newValues.password}`;
            console.log(loginUrl);
            $("#signup").html('Login Url:<br><br>'+loginUrl);
            {/* $("#signup").closest('form').find("input[type=text], textarea").val(""); */}
          }
        }>
        <div className="row">
          {this.renderFields()}
          <div className="col m12">
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onContentStateChange={this.onContentStateChange}
          />
          <RaisedButton type="submit" label="Sign Up" primary={true} labelColor={'#FFFFFF'}/>
         </div>
          
        </div>
        </form>
      </div>
    )
  }
}


const validate = values => {
  const errors = {}

  if (values.password !== values.passwordConfirmation) {
    errors.password = 'Passwords must match'
  }

  if (!values.email) {
    errors.email = 'Please enter an email'
  }

  if (!values.password) {
    errors.password = 'Please enter a password'
  }

  if (!values.passwordConfirmation) {
    errors.passwordConfirmation = 'Please confirm your password'
  }

  return errors
}



SignupForm = reduxForm({
  form: 'signup',
  validate
})(SignupForm)

SignupForm = connect(null,actions)(SignupForm)

export default SignupForm