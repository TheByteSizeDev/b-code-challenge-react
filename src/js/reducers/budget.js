
// why do I have this initial state? Shouldn't the initial state come from the store? Or the API?
const initialState = {
    budget: []
};

// maybe could have made this just one file, instead of each one of them having their own
// The Reducer takes the initial state and the action from the store. Then uses that action to decide what to do. Manipulate it, send it back, what ever.
function budgetReducer(state = initialState, action) {
    return state
};

export default budgetReducer;