import React, {Component}  from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../../actions'
import Popover from '../global/popover'

const PopoverOne = () => {
    return (
        <div>
            <h5>Multiple Domains, Custom Landing Pages</h5>
            <ul>
                <li>Client requested we point 3 domain names to their site with different content on the landing page of each domain. </li>
                <li>To prevent SEO erosion from duplicate content, all routes for restructuringshop.com and financelaw.com have canonical link tags pointing to their respective page on the main golmclaw.com domain.</li>
            </ul>
        </div>
    );
}
const popoverOne = {
    style: {
        position:'absolute',
        top:'10%',
        left:'20%'
    },
    position: {
        anchorOrigin: {"horizontal":"right","vertical":"bottom"},
        targetOrigin: {"horizontal":"left","vertical":"bottom"}
    }
};

const PopoverTwo = () => {
    return (
        <div>
            <h5>Old ‘professionals’ URLs preserved</h5>
            <ul>
                <li>While creating new ‘pretty URLS’ for the bios sections, we also mapped these to ‘ugly URLs’ from their previous site to prevent even a temporary removal of established sub-links from Google Search. </li>
                <li>All customizable from admin area.</li>
            </ul>
        </div>
    );
}

const popoverTwo = {
    style: {
        position:'absolute',
        bottom:'-40px',
        right:'35%'
    },
    position: {
        anchorOrigin: {"horizontal":"left","vertical":"top"},
        targetOrigin: {"horizontal":"middle","vertical":"bottom"}
    }
};


const PopoverThree = () => {
    return (
        <div>
            <h5>Server Rendered Home Page Scroll Sections</h5>
            <ul>
                <li>Server-side rendered Office and State Experience sections in scroll-sections modals.</li>
            </ul>
        </div>
    );
}
const popoverThree = {
    style: {
        position:'absolute',
        top:'10%',
        right:'10%'
    },
    position: {
        anchorOrigin: {"horizontal":"left","vertical":"bottom"},
        targetOrigin: {"horizontal":"right","vertical":"bottom"}
    }
};

const PopoverFour = () => {
    return (
        <div>
            <h5>Server Rendered Home Page Scroll Sections</h5>
            <ul>
                <li>Server-side rendered Office and State Experience sections in scroll-sections modals.</li>
            </ul>
        </div>
    );
}
const popoverFour = {
    style: {
        position:'absolute',
        top:'55%',
        right:'-15%'
    },
    position: {
        anchorOrigin: {"horizontal":"left","vertical":"bottom"},
        targetOrigin: {"horizontal":"right","vertical":"bottom"}
    }
};


class Project extends  Component {
	render() {
		return (
            <div className="row">
                <h2>Infrastructure Overview</h2>
                <div className="col m10 " style={{position:'relative'}}>
                    <img style={{paddingTop:'10%'}} alt="" src="/images/work/diagrams/eio-infrastructure.png" width="100%" />
                    <Popover position={popoverOne.position} style={popoverOne.style} label="Nginx Web Servers" content={<PopoverOne />} />
                    <Popover position={popoverTwo.position} style={popoverTwo.style} label="Node Applications" content={<PopoverTwo />} />
                    <Popover position={popoverThree.position} style={popoverThree.style} label="Mongo Cluster" content={<PopoverThree />} />
                    <Popover position={popoverFour.position} style={popoverFour.style} label="Block Storage" content={<PopoverFour />} />
                </div>
            </div>
		);
	}
}

function mapStateToProps(state) {
  return {
    message: state.auth.message
  }
}

export default connect(mapStateToProps, actions)(Project)