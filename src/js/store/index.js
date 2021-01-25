import { createStore } from "redux";
import { combineReducers } from 'redux';
import budgetReducer from '../reducers/budget'
import loanReducer from '../reducers/loan.js'
import collateralReducer from '../reducers/collateral.js'

const store = createStore(combineReducers({
    budgetReducer,
    loanReducer,
    collateralReducer
}));

export default store;