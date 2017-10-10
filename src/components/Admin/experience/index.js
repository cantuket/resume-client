import React, {Component} from 'react'
import {Form, Field} from 'redux-form'
import connect from 'react-redux'
import * as actions from '../actions'

class ExperienceContainer extends Component {
    constructor(props){
        super(props);
    }
    render (){
        return(
            <div>
            </div>
        );
    }
}

function mapStateToProps ({state}) {
    return (
        state
    );
}


export default connect(mapStateToProps, actions)(ExperienceContainer)