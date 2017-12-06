# Redux/AJAX Practice
## Description
###### A lesson in how to use AJAX in combination with React/Redux
### Initial Set up Steps
####  In order to wire up a react/redux app we need the following
###### 1. Provider - from react-reduxf
###### 2. createStore this come sform redux
###### 3. reducers to give to createStore
###### 4. make a single rootReducer to import our individual reducers
###### 5. Make at least one individual reducer to import into rooo
###### 6. Create theStore (2) with the reducers (3 -> 4 -> 5)
###### 7. Put the Provider Component (1) with a prop of store with the store (6) around <App />
#### rootReducer Set up
###### Step 1. import combineReducers from redux
###### Step 2. Call combineReducers method and pass it an object
###### Step 3. Each key/property of the object, will be a single piece of application/reducer
###### Step 4. Each value will be a single reducer (imported)
#### reducer Set up
###### Step 1. make a function that has 2 params:
######  - state (usually set a default)
######  - action 
###### Step 2. The state param contians THIS reducers state. Just like a variable.
###### Step 3. The action param will contain whatever the object the action sent us
######  - type (REQUIRED)
######  - payload (data/JSON/stuff)
###### Step 4. Check the action.type to see if it's important
###### Step 4a. If important, return some new state
###### Step 4b. If I don't care, return state (old state) 
