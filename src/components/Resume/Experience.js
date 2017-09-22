import React from 'react';
import _ from 'lodash'
import {
  Step,
  Stepper,
  StepButton,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Chip from 'material-ui/Chip';

import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';

import ActionHome from 'material-ui/svg-icons/action/home';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import ExperienceSection from './ExperienceSection';
import Portfolio from './Portfolio/index'
import {Row, Col} from 'react-grid-system'

import { StickyContainer, Sticky } from 'react-sticky';
import Scroll from 'react-scroll'; // Imports all Mixins
import {scroller} from 'react-scroll'; 
var scroll = Scroll.animateScroll;
let Element  = Scroll.Element;

const experienceContent = [
  { era: 'Entrepreneur & Developer',
    overview: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
    dates:'July 2013 - Present',
    jobs:[{
        company:'End Behavior',
        icon:'http://endbehavior.com/_layout/images/logos/end-behavior-full-black.png',
        title:'Partner',
        date:'Dec 2016 - Present',
        location:'Chicago, IL',
        highlights: ['javascript', 'html'],
        intro:'Founder and partner of digital constancy for Private Equity Groups',
        body:'I’m a member of a digital marketing team that provides digital marketing services and due diligence to PEGs and their portfolio companies. I’m Responsible for all aspects of creative media & web development, as well as the project management lead.',
        
      },
      {
        company:'Efficacy I/O',
        icon:'',
        title:'President',
        date:'July 2013 – Dec 2016 ',
        location:'Chicago, IL',
        intro:'Founder/Owner/Developer of creative web studio',
        body:'We built websites for a wide range of clients involving E-commerce, dynamically generated multi-sites, highly customized content management systems and advanced front-end JS animations. I managed all aspects of front-end development, back-end development, client management, reporting & monitoring and infrastructure management. Worked with distributed team of graphic designers, SEO specialists and photographers.',
        
      }
    ]
  },
  { era: 'Learning & Hacking',
    overview: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
    dates: 'July 2013 - Dec 2016',
    jobs:[{
        company:'The Computer Studio',
        icon:'',
        title:'Developer',
        date:'July 2013 – Dec 2016',
        location:'Chicago, IL',
        intro:'Lead developer for a digital agency, building most Wordpress sites.',
        body:'I worked as lead developer for a small agency and have been involved in a range of different front-end, back-end and marketing projects.',
        
        
      },
      {
        company:'Nudge',
        icon:'',
        title:'Founder & Developer',
        date:'February 2013 – July 2013',
        location:'Chicago, IL',
        intro:'Hacked together prototype of an app that curates local events based off your interests',
        body:'Nudge Chicago is a platform designed to help users find local events based on their interests and consumption patterns. Our software identifies the specific motivations of event attendees through a series of targeted questions, which populates the best matching events based on our detailed event tagging system.',
      }
    ]
  },
  { era: 'Banker & Manager',
    overview: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
    dates: 'July 2013 - Dec 2016',
    jobs:[{
        title:'Consultant',
        icon:'',
        company:'Blaige & Company',
        date:'July 2012 - February 2013',
        location:'Chicago, IL',
        intro:'',
        body:'• Wrote confidential memorandums, management presentations and pitch deliverables.• Led business development campaigns and deal marketing processes.• Performed financial, customer and market analyses.• Constructed ‘Plastics Industry Consolidation Study’.• Participated in client ‘pitches’ and due diligence.',
        
      },
      {
        title:'Managing Associate',
        icon:'',
        company:'Blackmore Partners',
        date:'Mar 2012 - July 2012 ',
        location:'Chicago, IL',
        intro:'',
        body:`<ul>
              <li>Led Deal Team and managed core business functions.</li>
              <li>Increased deal activity through improved information systems and client management.</li>
              <li>Established policy deployment schedule and KPI dashboard.</li>
              <li>Expanded firm from 12 to 21 employees by optimizing hiring processes and organizational structures.</li>
              <li>Increased productivity by integrating executive search team with core business functions.</li>
              <li>Led 4 deals from origination to LOI (Pipeline Services, Flexible Printing, Automotive/Minning and Medical Diagnostics)</li>
              </ul>`,
        
      }
    ]
  }
];

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

  state = {
    stepIndex: 'none',
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (stepIndex < 2) {
      this.setState({stepIndex: stepIndex + 1});
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };
  scrollTo = (element) => {
    scroll.scrollTo(300);
  };

  renderStepActions(step, next, previous) {
   const {stepIndex} = this.state;

    if (stepIndex !== 'none') {
    return (
      <div style={{margin: '12px',width:'100%',display:'block', position:'relative'}}>
        <div style={{position:'absolute',left:'-100px',top:'140px'}}>
            <IconButton 
            tooltip={stepIndex === 0 ? "":"Previous"}
            onClick={this.handlePrev}
            style={styles.moveIconUp}
            className={stepIndex === 0 ?"no-pointer":""}
            // iconStyle={{color:'red', background:'red'}}
          >
             <i className={stepIndex === 0 ? "hide material-icons large" : "material-icons large"}>keyboard_arrow_up</i>
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

  renderExperieneceSections () {
      return _.map(experienceContent, (section,i) => {
        return(
          <ExperienceSection content={section} />
        );
      });
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
    console.log(width);
    return  _.map(jobs, (job,i) =>{
      return (
        <ExperienceSection key={i} width={width} content={job} />
      );
    });
  }

  renderSteps () {
      return _.map(experienceContent, (section, i) => {
          return (
              <Step key={i}>
                <StepButton onClick={() => this.setState({stepIndex: i})}>
                  <h5>{section.era}&nbsp;&nbsp;|</h5> <p style={{marginBottom:0, marginTop:'10px', marginLeft:'20px'}}>{section.dates}</p>
                </StepButton>
                <StepContent>
                  <h6>{section.overview}</h6>
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
    if (stepIndex === 'none') {
      return (
          <RaisedButton
          label="Learn More"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={() => {
            this.setState({stepIndex: 0});
             this.scrollTo(Stepper); 
          }}
          style={{marginRight: 12}}
        />
      );
    }
  }
  // {this.renderStepActions(0, 'Next', 'Back')}
  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{maxWidth: 1000, maxHeight: 1000, margin: 'auto',minHeight:'150vh'}}>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</h4>
        <div style={{minHeight:'60px'}}>
        {this.renderStartBtn()}
       {this.renderStepActions()}
        </div>
        <Element style={{position:'relative', display:'inline-block'}} name="Stepper"></Element>
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

export default VerticalNonLinear;