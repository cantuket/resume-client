import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AUTH_USER } from './actions/types'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { PrivateRoute } from './components/auth/require_auth'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {AnimatedSwitch } from 'react-router-transition';
// Needed for onTouchTap with material-ui http://stackoverflow.com/a/34015469/988941
import {Col, Row} from 'react-grid-system';

import Header from './components/header'
import Signin from './components/auth/signin'
import Signout from './components/auth/signout'
import Signup from './components/auth/signup'
import Welcome from './components/welcome'
import Work from './components/Resume/Work'
import Breadcrumbs from './components/Resume/Work/global/breadcrumbs'
import Portfolio from './components/Resume/Work/Portfolio/index'
import Infrastructure from './components/Resume/Work/Infrastructure'

import ErinAuctions from './components/Resume/Work/Portfolio/ErinAuctions'
import ErinAuctionsDataStructure from './components/Resume/Work/Portfolio/ErinAuctions/data-structure'
import ErinAuctionsFeatures from './components/Resume/Work/Portfolio/ErinAuctions/features'
// import PortfolioContainer from './components/Resume/Work/Portfolio/Project/index'

import GM from './components/Resume/Work/Portfolio/GM'
import GMDataStructure from './components/Resume/Work/Portfolio/GM/data-structure'
import GMRoutes from './components/Resume/Work/Portfolio/GM/routes'
import GMFeatures from './components/Resume/Work/Portfolio/GM/features'

import Townhouse from './components/Resume/Work/Portfolio/Townhouse'
import TownhouseDataStructure from './components/Resume/Work/Portfolio/Townhouse/data-structure'
import TownhouseFeatures from './components/Resume/Work/Portfolio/Townhouse/features'

import TBG from './components/Resume/Work/Portfolio/TBG'
import TBGDataStructure from './components/Resume/Work/Portfolio/TBG/data-structure'
import TBGRoutes from './components/Resume/Work/Portfolio/TBG/routes'
import TBGFeatures from './components/Resume/Work/Portfolio/TBG/features'

import ReactProjects from './components/Resume/Work/ReactProjects'
import P2P from './components/Resume/Work/ReactProjects/p2p'
import Resume from './components/Resume/Work/ReactProjects/resume'

import Experience from './components/Resume/Experience'
import Contact from './components/Resume/Contact'
import UrlSignin from './components/Resume/UrlSignin'



injectTapEventPlugin()
const store = createStore(reducers,composeWithDevTools(
    applyMiddleware(reduxThunk)   
));
const token = localStorage.getItem('token')
if (token) {
  store.dispatch({type: AUTH_USER})
}

const muiTheme = getMuiTheme({
    "palette": {
        // "primary1Color": "#7986cb",
        "primary1Color": "#000",
        "primary2Color": "#303f9f",
        "primary3Color": "#c5cae9",
        "accent1Color": "#80deea",
        "accent2Color": "#64b5f6",
        "secondaryTextColor": "#7986cb",
        "canvasColor": "#e3f2fd",
        "alternateTextColor": "#ffffff",
        "disabledColor": "rgba(0, 0, 0, 0.12)"
    }
});

// // wrap the `spring` helper to use a bouncy config
// function bounce(val) {
//   return spring(val, {
//     stiffness: 330,
//     damping: 22,
//   });
// }

// // child matches will...
// const bounceTransition = {
//   // start in a transparent, upscaled state
//   atEnter: {
//     opacity: 0,
//     scale: 1.2,
//   },
//   // leave in a transparent, downscaled state
//   atLeave: {
//     opacity: bounce(0),
//     scale: bounce(0.8),
//   },
//   // and rest at an opaque, normally-scaled state
//   atActive: {
//     opacity: bounce(1),
//     scale: bounce(1),
//   },
// };

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider 
      muiTheme={muiTheme}
      >
        <div>
          <Header currentLocation={location}/>
          
          <div className="body">
            <div className="row">
              <div className="col  m10 offset-m1">
              <Route path="/work" component={Breadcrumbs}/>
              {/* <AnimatedSwitch
                  // atEnter={bounceTransition.atEnter}
                  // atLeave={bounceTransition.atLeave}
                  // atActive={bounceTransition.atActive}
                  // mapStyles={mapStyles}
                  atEnter={{ opacity: 0 }}
                  atLeave={{ opacity: 0 }}
                  atActive={{ opacity: 1 }}
                  className="route-wrapper"
                > */}
                <PrivateRoute path="/" exact={true} component={Welcome}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/signout" component={Signout}/>
                <PrivateRoute path="/some-crazy-admin-route" component={Signup}/>
                
                {/* Url Signin */}
                <Route path="/cool-company" component={UrlSignin}/>

                {/* Public */}
                <Route path="/welcome" component={Welcome}/>                

                {/* Private */}
                <Route path="/experience" exact={true} component={Experience}/>
                
                <Route path="/work" exact={true} component={Work}/>
                
                <Route path="/work/portfolio" exact={true} component={Portfolio}/>
                <Route path="/work/infrastructure" exact={true} component={Infrastructure}/>
                
                {/* <Route path="/work/portfolio/:project?/:section?" exact={true} component={PortfolioContainer}/> */}

                <Route path="/work/portfolio/erin-auctions" exact={true} component={ErinAuctions}/>
                <Route path="/work/portfolio/erin-auctions/data-structure" exact={true} component={ErinAuctionsDataStructure}/>
                <Route path="/work/portfolio/erin-auctions/features" exact={true} component={ErinAuctionsFeatures}/>

                <Route path="/work/portfolio/goldstein-mcclintock" exact={true} component={GM}/>
                <Route path="/work/portfolio/goldstein-mcclintock/data-structure" exact={true} component={GMDataStructure}/>
                <Route path="/work/portfolio/goldstein-mcclintock/routes" exact={true} component={GMRoutes}/>
                <Route path="/work/portfolio/goldstein-mcclintock/features" exact={true} component={GMFeatures}/>
                

                <Route path="/work/portfolio/the-bartend-group" exact={true} component={TBG}/>
                <Route path="/work/portfolio/the-bartend-group/data-structure" exact={true} component={TBGDataStructure}/>
                <Route path="/work/portfolio/the-bartend-group/routes" exact={true} component={TBGRoutes}/>
                <Route path="/work/portfolio/the-bartend-group/features" exact={true} component={TBGFeatures}/>

                <Route path="/work/portfolio/townhouse" exact={true} component={Townhouse}/>
                <Route path="/work/portfolio/townhouse/data-structure" exact={true} component={TownhouseDataStructure}/>
                <Route path="/work/portfolio/townhouse/features" exact={true} component={TownhouseFeatures}/>

                <Route path="/work/react-projects" exact={true} component={ReactProjects}/>
                <Route path="/work/react-projects/p2p-app" exact={true} component={P2P}/>
                <Route path="/work/react-projects/resume-app" exact={true} component={Resume}/>
                
                <Route path="/contact" exact={true} component={Contact}/>

                
              {/* </AnimatedSwitch> */}
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
  , document.getElementById('root'))
