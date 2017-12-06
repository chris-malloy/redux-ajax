// reducer set up steps
// Step 1. make a function that has 2 params:
//  - state (usually set a default)
//  - action 
// Step 2. The state param contians THIS reducers state. Just like a variable.
// Step 3. The action param will contain whatever the object the action sent us
//  - type (REQUIRED)
//  - payload (data/JSON/stuff)
// Step 4. Check the action.type to see if it's important
// Step 4a. If important, return some new state
// Step 4b. If I don't care, return state (old state) 

export default function(state = null, action){ // Step 1, 3 & 4
    switch(action.type){
        case "GET_WEATHER":
        case "GET_STOCKS":
        default:
            return state;
    }
};



