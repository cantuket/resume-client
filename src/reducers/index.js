import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import authReducer from './auth_reducer'
import listingReducer from './listing_reducer'
import listingsReducer from './listings_reducer'
import meetingsReducer from './meetings_reducer'

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  listings: listingsReducer,
  listing: listingReducer,
  meetings:meetingsReducer
})

export default rootReducer
