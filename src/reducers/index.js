// this is the rootReducer
// Step 1. import combineReducers from redux
// Step 2. Call combineReducers method and pass it an object
// Step 3. Each key/property of the object, will be a single piece of application/reducer
// Step 4. Each value will be a single reducer (imported)

import { combineReducers } from 'redux'; // Step 1.
import WeatherReducer from './WeatherReducer';

// set combineReducers' return value to rootReducer
const rootReducer = combineReducers({ // Step 2.
    weather: WeatherReducer, // Step 3 & 4
})

export default rootReducer;