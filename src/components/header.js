import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import Drawer from 'material-ui/Drawer';
// import MenuItem from 'material-ui/MenuItem';
// import AppBar from 'material-ui/AppBar';
// import IconButton from 'material-ui/IconButton';
// import NavigationMenu from 'material-ui/svg-icons/navigation/menu'

import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import {Row, Col} from 'react-grid-system'

 function handleTouchTap() {
alert('onClick triggered on the title component');
}

const styles = {
title: {
  cursor: 'pointer',
},
};

class Header extends Component {
   constructor(props) {
    super(props);
     this.state = {
      value: 3,
    };

    this.state = {open: false};
  }

  renderAppBar() {
    if (this.props.authenticated) {
      return (
          <div className="row main-nav">
            <div className="col" style={{width:'20%'}} key={0}>
              <Link key={0}  to="/welcome"  onClick={(close) => this.setState({open: false})}>
                 <RaisedButton label="Welcome" primary={true} />
              </Link>
            </div>
            <div className="col" style={{width:'20%'}} key={1}>
              <Link key={0}  to="/experience"  onClick={(close) => this.setState({open: false})}>
                 <RaisedButton label="Experience" primary={true} />
              </Link>
            </div>
            <div className="col" style={{width:'20%'}} key={2}>
              <Link key={0}  to="/portfolio"  onClick={(close) => this.setState({open: false})}>
                 <RaisedButton label="Portfolio" primary={true} />
              </Link>
            </div>
             <div className="col" style={{width:'20%'}}  key={3}>
               <Link key={0}  to="/contact"  onClick={(close) => this.setState({open: false})}>
                 <RaisedButton label="Contact" primary={true} />
              </Link>
            </div>
            <div className="col" style={{width:'20%'}}  key={4}>
               <Link key={0}  to="/signout"  onClick={(close) => this.setState({open: false})}>
                 <RaisedButton label="Sign Out" primary={true} />
              </Link>
            </div>
         </div>
      );
    } else {
      return (
         <Row className="main-nav">
            <Col key={0} sm={12}>
            <Link key={0}  to="/welcome"  onClick={(close) => this.setState({open: false})}>
               <RaisedButton label="About Me" primary={true} />
            </Link>
          </Col>
         </Row>
      );
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        {this.renderAppBar()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps,)(Header)