import React from 'react';
import _ from 'lodash'
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

const experienceContent = [
  { era: 'Developer & Consultant',
    //overview: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
    dates:'July 2013 - Present',
    jobs:[{
        company:'End Behavior',
        icon:'http://endbehavior.com/_layout/images/logos/end-behavior-full-black.png',
        title:'Partner',
        date:"Dec '16 - Present",
        location:'Chicago, IL',
        highlights: ['javascript', 'html'],
        intro:'Partner amd developer of digital constancy for Private Equity Groups',
        body:'<p>Own a firm that provides digital marketing and due diligence services to private equity groups and their portfolio companies. I’m Responsible for all aspects of creative media &amp; web development, as well as the project management lead.</p>',
        
      },
      {
        company:'Devour Agency',
        icon:'',
        title:'Partner',
        date:"Dec '16 - Present",
        location:'Chicago, IL',
        intro:'Partner and developer of digital agency focused on restaurants',
        body:`<p>Devour is a group of marketing and creative experts who are almost as passionate about food as we are about growth. We elevate brands and drive growth by any and all means available.</p>
              <p>We’ve developed customized digital strategies for each segment of the restaurant industry allowing us to deliver tailored solutions that are designed to maximize your ROI in digital marketing.</p>`,
        
      },
      {
        company:'Efficacy I/O',
        icon:'',
        title:'President',
        date:"Jul '13 – Dec '16",
        location:'Chicago, IL',
        intro:'Founder/Owner/Developer of creative web studio',
        body:'<p>We built websites for a wide range of clients involving E-commerce, dynamically generated multi-sites, highly customized content management systems and advanced front-end JS animations. I managed all aspects of front-end development, back-end development, client management, reporting & monitoring and infrastructure management. Worked with distributed team of graphic designers, SEO specialists and photographers.</p>',
        
      }
    ]
  },
  { era: 'Learning & Hacking',
    // overview: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
    dates: 'July 2013 - Dec 2016',
    jobs:[{
        company:'The Computer Studio',
        icon:'',
        title:'Developer',
        date:"Jul '13 – Present",
        location:'Chicago, IL',
        intro:'Developer for a digital agency, building mostly Wordpress sites.',
        body:'<p>I work for a small agency and have been involved in a range of different front-end, back-end and marketing projects.</p>',
        
        
      },
      {
        company:'Nudge',
        icon:'',
        title:'Founder',
        date:"Feb '13 – Jul '13",
        location:'Chicago, IL',
        intro:'Hacked together prototype of an app that curates local events based off your interests',
        body:'<p>Nudge Chicago is a platform designed to help users find local events based on their interests and consumption patterns. Our software identifies the specific motivations of event attendees through a series of targeted questions, which populates the best matching events based on our detailed event tagging system.</p>',
      }
    ]
  },
  { era: 'Banker & Manager',
   // overview: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
    dates: 'December 2011 - February 2013',
    jobs:[
      {
        title:'Consultant',
        icon:'',
        company:'Blaige & Company',
        date:"Jul '12 - Feb '13",
        location:'Chicago, IL',
        intro:'',
        body:`<ul>
                <li>Wrote confidential memorandums, management presentations and pitch deliverables.</li>
                <li>Led business development campaigns and deal marketing processes.</li>
                <li>Performed financial, customer and market analyses.</li>
                <li>Constructed ‘Plastics Industry Consolidation Study’</li>
                <li>Participated in client ‘pitches’ and due diligence.</li>
              </ul>`,
        
      },
      {
        title:'Managing Associate',
        icon:'',
        company:'Blackmore Partners',
        date:"Mar '12 - Jul '12 ",
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
        
      },
      {
        title:'Senior Analyst',
        icon:'',
        company:'Blackmore Partners',
        date:"Dec '11 - Mar '12 ",
        location:'Chicago, IL',
        intro:'',
        body:`<ul>
                <li>Developed investment proposals</li>
                <li>Attended management presentations</li>
                <li>Led business development campaigns</li>
                <li>Restructured CRM Process</li>
                <li>Managed recruiting, hiring and training</li>
                <li>Analyzed and contacted target clients</li>
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
                <StepButton 
                onClick={() => {
                  this.setState({stepIndex: i});
                  this.scrollTo('stepper'); 
                }}
                >
                  <h5 style={{fontWeight:'600'}}>{section.era}&nbsp;&nbsp;</h5> <p style={{marginBottom:0, marginTop:'10px', marginLeft:'20px'}}>{section.dates}</p>
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
          has been my primary passion and income stream, working on contract work, client projects and experimental side projects. 
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

export default VerticalNonLinear;