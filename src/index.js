// In order to wire up a react/redux app we need the following
// 1. Provider - from react-reduxf
// 2. createStore this come sform redux
// 3. reducers to give to createStore
// 4. make a single rootReducer (3) to import our individual reducers
// 5. Make at least one individual reducer to import into rooo
// 6. Create theStore (2) with the reducers (3 -> 4 -> 5)
// 7. Put the Provider Component (1) with a prop of store with the store (6) around <App />

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// redux dependencies
import { Provider } from 'react-redux'; // Step 1
import { createStore } from 'redux'; // Step 2
import reducers from './reducers/index';
// make store object
const theStore = createStore(reducers);

// wrap Provider component around App 
ReactDOM.render(
    <Provider store={theStore}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

