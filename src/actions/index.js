import axios from 'axios'
import {
  UNAUTH_USER,
  AUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  FETCH_MEETINGS,
  CREATE_EXPERIENCE,
  FETCH_EXPERIENCES,
  FETCH_EXPERIENCE,
} from './types'
const ROOT_URL = 'http://35.202.81.248:3090'
// const ROOT_URL = 'http://104.197.146.179:3090'
// const ROOT_URL = 'http://localhost:3090'


export const fetchExperiences = () => async dispatch => {
  const res = await axios.get(`${ROOT_URL}/api/public/experiences`, {
  });
  dispatch({type: FETCH_EXPERIENCES, payload: res.data});
}


export function signinUser({email, password}) {
  return function (dispatch) {
    const request = axios.post(`${ROOT_URL}/signin`, {email, password})
    request.then(response => {
      localStorage.setItem('token', response.data.token)
      dispatch({type: AUTH_USER})
    }).catch(() => {
      dispatch(authError('bad login info'))
    })
  }
}

// !HACK - using username as password to avoid Auth middleware re-write!
export function signinUrl(email, password, history) {

  return function (dispatch) {
    const request = axios.post(`${ROOT_URL}/url-signin`, {email, password})
    request.then(response => {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('userData', JSON.stringify(response.data.userData))
      history.replace('/welcome');
      dispatch({type: AUTH_USER})
    }).catch(() => {
      dispatch(authError('bad login info'))      
    })
    history.replace('/welcome');
    
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  localStorage.removeItem('userData');
  return {type: UNAUTH_USER}
}

export function signupUser(values) {
  return function (dispatch) {
    axios
      .post(`${ROOT_URL}/signup`, values)
      .then(response => {
        dispatch({type: AUTH_USER})
        localStorage.setItem('token', response.data.token)
      })
      .catch(({response}) => {
        dispatch(authError(response.data.error))
      })
  }
}


export function authError(error) {
  return {type: AUTH_ERROR, payload: error}
}

export const createMeeting = (values, history) => async dispatch => {
  const res = await axios.post(`${ROOT_URL}/api/create-meeting`, values, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  });

  history.push('/contact');
  dispatch({type: FETCH_MEETINGS, payload: res.data});
}

export const fetchAllMeetings = () => async dispatch => {
  const res = await axios.get(`${ROOT_URL}/api/all-meetings`, {
    headers: {
      authorization: localStorage.getItem('token')
    }
  });
  dispatch({type: FETCH_MEETINGS, payload: res.data});
}


export function fetchMessage() {
  return function (dispatch) {
    axios
      .get(ROOT_URL, {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
      .then(response => {
        dispatch({type: FETCH_MESSAGE, payload: response.data.message})
      })
  }
}





