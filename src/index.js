import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AUTH_USER } from './actions/types'
import Header from './components/header'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Signin from './components/auth/signin'
import Signout from './components/auth/signout'
import Signup from './components/auth/signup'

import { PrivateRoute } from './components/auth/require_auth'
import reducers from './reducers'

import Welcome from './components/welcome'

import Portfolio from './components/Resume/Portfolio/index'
import ErinAuctions from './components/Resume/Portfolio/ErinAuctions'
import Experience from './components/Resume/Experience'
import Contact from './components/Resume/Contact'
import UrlSignin from './components/Resume/UrlSignin'

// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { composeWithDevTools } from 'redux-devtools-extension';
import {Col, Row} from 'react-grid-system';
// import { AnimatedRoute } from 'react-router-transition';
import { spring, AnimatedSwitch } from 'react-router-transition';
// Needed for onTouchTap with material-ui
// http://stackoverflow.com/a/34015469/988941

injectTapEventPlugin()

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
// const store = createStoreWithMiddleware(reducers)
// const token = localStorage.getItem('token')



const store = createStore(reducers,composeWithDevTools(
    applyMiddleware(reduxThunk)   
));

const token = localStorage.getItem('token')


if (token) {
  store.dispatch({type: AUTH_USER})
}

const muiTheme = getMuiTheme({
    "palette": {
        "primary1Color": "#7986cb",
        "primary2Color": "#303f9f",
        "primary3Color": "#c5cae9",
        "accent1Color": "#8d6e63",
        "accent2Color": "#64b5f6",
        "secondaryTextColor": "#7986cb",
        "canvasColor": "#e3f2fd",
        "alternateTextColor": "#ffffff",
        "disabledColor": "rgba(0, 0, 0, 0.12)"
    }
});

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider 
      muiTheme={muiTheme}
      >
        <div>
          <Header/>
          <div className="body">
            <Row>
              <Col md={10} offset={{md:1}}>
              <AnimatedSwitch
                  // atEnter={bounceTransition.atEnter}
                  // atLeave={bounceTransition.atLeave}
                  // atActive={bounceTransition.atActive}
                  // mapStyles={mapStyles}
                  atEnter={{ opacity: 0 }}
                  atLeave={{ opacity: 0 }}
                  atActive={{ opacity: 1 }}
                  className="route-wrapper"
                >
                <Route path="/" exact={true} component={Welcome}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/signout" component={Signout}/>
                <Route path="/admin" component={Signup}/>
                
                {/* Url Signin */}
                <Route path="/job-prospect" component={UrlSignin}/>

                {/* Public */}
                <Route path="/welcome" component={Welcome}/>                

                {/* Private */}
                <PrivateRoute path="/experience" exact={true} component={Experience}/>
                <PrivateRoute path="/portfolio" exact={true} component={Portfolio}/>
                <PrivateRoute path="/portfolio/erin-auctions" exact={true} component={ErinAuctions}/>
                <PrivateRoute path="/contact" exact={true} component={Contact}/>

                
              </AnimatedSwitch>
              </Col>
            </Row>
          </div>
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
  , document.getElementById('root'))
