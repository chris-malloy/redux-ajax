// In order to wire up a react/redux app we need the following
// 1. Provider - from react-reduxf
// 2. createStore this come sform redux
// 3. reducers to give to createStore
// 4. make a single rootReducer (3) to import our individual reducers
// 5. Make at least one individual reducer to import into rooo
// 6. Create theStore (2) with the reducers (3 -> 4 -> 5)
// 7. Put the Provider Component (1) with a prop of store with the store (6) around <App />
// 8. If we need redux middleware, we need to import if from redux (applyMiddleWare)
// 9. import redux-promise so that if an action nees to return a promise/async the middleware will tell redux to stop and waitf
// 10. When we make the store, kind of like connect, we apply middleware first, then we hand it containers

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux dependencies
import { Provider } from 'react-redux'; // Step 1
import { createStore, applyMiddleware } from 'redux'; // Step 2
import reducers from './reducers/index';
import reduxPromise from 'redux-promise'

// make store object
// do not use this if using middleware
// const theStore = createStore(reducers); // Step 6

// const theStoreWithMiddleWare = applyMiddleware(reduxPromise)(createStore)(reducers);
// another way to look at it
const middleWare = applyMiddleware(reduxPromise); // returns a function
const theStore = middleWare(createStore);
const theStoreWithReducers = theStore(reducers)

// wrap Provider component around App 
ReactDOM.render(
    <Provider store={theStoreWithReducers}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

