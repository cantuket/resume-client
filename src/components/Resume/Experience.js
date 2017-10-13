import React from 'react';
import _ from 'lodash'
import {connect} from 'react-redux'
import* as actions from '../../actions'
import moment from 'moment'
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import ExperienceSection from './ExperienceSection';
import {Row} from 'react-grid-system'
import $ from 'jquery'
import Scroll from 'react-scroll'; // Imports all Mixins

var scroll = Scroll.animateScroll;
let Element  = Scroll.Element;

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chipHolder: {
    display: 'flex',
    marginLeft: '20px',
    float: 'right',
    width: '400px'
  },
  moveIcons:{
    fontSize:'40px'
  },
  moveIconUp:{
    display:'block',
    marginBottom:'70px',
  },
  moveIconDown:{
    display:'block',
    marginTop:'70px',
  },
};
/**
 * A basic vertical non-linear implementation
 */
class VerticalNonLinear extends React.Component {

  componentDidMount (){
    this.props.fetchExperiences();
  }
  state = {
    stepIndex: -1,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
      this.scrollTo('stepper');
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex >= 0) {
      if (stepIndex === 0) {
        scroll.scrollTo(0);
      }
      this.setState({stepIndex: stepIndex - 1});
    }
    
  };
  scrollTo = (element) => {
    let position = $(`#${element}`).offset().top - 80;
    scroll.scrollTo(position);
  };

  renderStepActions(step, next, previous) {
   const {stepIndex} = this.state;

    if (stepIndex !== -1) {
    return (
      <div style={{margin: '12px',width:'100%',display:'block', position:'relative'}}>
        <div style={{position:'absolute',left:'-100px',top:'140px'}}>
            <IconButton 
            tooltip={stepIndex === 0 ? "Overview":"Previous"}
            onClick={this.handlePrev}
            style={styles.moveIconUp}
            //className={stepIndex === 0 ?"no-pointer":""}
          >
             <i className={"material-icons large"}>keyboard_arrow_up</i>
          </IconButton> 
            <IconButton 
             tooltip={stepIndex > 1 ?"":"Next"}
             onClick={this.handleNext}
             style={styles.moveIconDown}
              className={stepIndex > 1 ?"no-pointer":""}
            >
            <i className={stepIndex > 1 ? "hide material-icons large" : "material-icons large"}>keyboard_arrow_down</i>
          </IconButton>
        </div>
      </div>
    );
  }
  }

  renderChips (chips) {
    return _.map(chips, (chip,i) => {
      return (
        <Chip style={styles.chip}>
          {chip}
        </Chip>
      );
    })
  }

  renderJobs(jobs){
    let width = 100/jobs.length + '%';
    return  _.map(jobs, (job,i) =>{
      return (
        <ExperienceSection key={i} width={width} content={job} />
      );
    });
  }
  renderEndDate(endDate){
    let theEndDate = '';
    if (endDate === true) { 
      theEndDate = 'Present';
    } else {
      theEndDate =  moment(endDate).format('MMMM YYYY')
    }
    return (theEndDate);
  }


  renderSteps () {
      return _.map(_.sortBy(this.props.experiences,'startDate').reverse(), (section, i) => {
          return (
              <Step key={i}>
                <StepButton 
                onClick={() => {
                  this.setState({stepIndex: i});
                  this.scrollTo('stepper'); 
                }}
                >
                  <h5 style={{fontWeight:'600'}}>
                   {section.title}&nbsp;&nbsp;
                  </h5> 
                  <p style={{marginBottom:0, marginTop:'10px', marginLeft:'20px'}}>
                  {moment(section.startDate).format('MMMM YYYY')} - {this.renderEndDate(section.endDatePresent)}
                  </p>
                </StepButton>
                <StepContent>
                  <h6 dangerouslySetInnerHTML={{__html:section.overview}} />
                  <Row>
                   {this.renderJobs(section.jobs)}
                  </Row>
                </StepContent>
              </Step>
          );
      });
  }

  renderStartBtn () {
    const {stepIndex} = this.state;
    if (stepIndex === -1) {
      return (
          <RaisedButton
          label="Learn More"
          disableTouchRipple={true}
          disableFocusRipple={true}
          secondary={true}
          onClick={() => {
            this.setState({stepIndex: 0});
             this.scrollTo('stepper'); 
          }}
          style={{marginRight: 12}}
          labelPosition="before"
          icon={<i className="white-text material-icons">arrow_drop_down</i>}
        />
      );
    }
  }
  render() {
    const {stepIndex} = this.state;
    return (
      <div style={{maxWidth: 1000, maxHeight: 1000, margin: 'auto',paddingTop:'60px',minHeight:'150vh'}}>
        <h5 style={{lineHeight:'1.5'}}>
          I have a pretty diverse background with experience in a wide range of industries and roles 
          including sales, consulting, strategy and management. I've been programming for the past 5 years, which 
          has been my primary passion and income stream, working on a combination of contract work, client projects and experimental side projects. 
        </h5>
        <div style={{minHeight:'60px', marginTop:'20px'}}>
       {this.renderStartBtn()}
       {this.renderStepActions()}
        </div>
        <Element style={{position:'relative', display:'inline-block'}} id="stepper" name="Stepper"></Element>
        <Stepper
          activeStep={stepIndex}
          linear={false}
          orientation="vertical"
        >
          {this.renderSteps()}
        </Stepper>
      </div>
    );
  }
}

function mapStateToProps (state) {
      return {
        experiences:state.experiences
      };
}

export default connect(mapStateToProps,actions)(VerticalNonLinear);