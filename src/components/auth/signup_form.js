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
    {name:'email',type:'text'},
    {name:'password',type:'password'},
    {name:'passwordConfirmation',type:'text'},
    {name:'organization',type:'text'},
    {name:'contactName',type:'text'},
    {name:'jobPost',type:'text'},
    {name:'coverLetter',type:'textarea'},
    {name:'logo',type:'text'},
    {name:'realEmail',type:'text'},
    {name:'position',type:'text'},
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
             <Field
              key={i}
              label={field.name}
              name={field.name}
              component={renderTextField}
              type={field.type}
              placeholder={field.name}
              />
          );
      });
  }

  render() {

    return (
      <div>
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
            console.log(this);
            console.log(newValues);
            this.props.signupUser(newValues);
          }
        }>
          {this.renderFields()}
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            onContentStateChange={this.onContentStateChange}
          />

          <RaisedButton type="submit" label="Sign Up" primary={true} labelColor={'#FFFFFF'}/>
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