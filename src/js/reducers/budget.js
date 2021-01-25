import { APP_LOADED } from "../constants/action-types"

const initialState = {
    budget: [
        { type: 'soft', 
        name: 'Permits', 
        budget: 50000, 
        progress: 0, 
        funded: 0, 
        remaining: 50000},
        { type: 'soft', 
        name: 'Permits', 
        budget: 50000, 
        progress: 0, 
        funded: 0, 
        remaining: 50000},
        { type: 'soft', 
        name: 'Permits', 
        budget: 50000, 
        progress: 0, 
        funded: 0, 
        remaining: 50000}
    ]
}

function budgetReducer(state = initialState, action) {
    switch (action.type) {
        case APP_LOADED:
            return state
        default:
            return state
    }
}

export default budgetReducer