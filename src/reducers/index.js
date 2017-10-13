import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import authReducer from './auth_reducer'
import meetingsReducer from './meetings_reducer'
import experiencesReducer from './experiences_reducer'
import experienceReducer from './experience_reducer'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  meetings:meetingsReducer,
  experiences:experiencesReducer,
  experience:experienceReducer
})

export default rootReducer
