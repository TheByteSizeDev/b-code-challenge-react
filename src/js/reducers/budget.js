
const initialState = {
    budget: []
};

function budgetReducer(state = initialState, action) {
    if (action.type === APP_LOADED) {
        return Object.assign({}, state, {
          budget: state.articles.concat(action.payload)
        });
      }
    return state
};

export default budgetReducer;