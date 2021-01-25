// import { ADD_ARTICLE } from "../constants/action-types";

// const initialState = {
//     articles: []
//   };
  
//   function rootReducer(state = initialState, action) {
//     // Use action types to tell the reducer what to do with the payload to produce the next state
//     if (action.type === ADD_ARTICLE) {
//         // core principles of Redux is to never mutate state, so we create a copy
//         return Object.assign({}, state, {
//             // And manipulate the copy
//             articles: state.articles.concat(action.payload)
//         })
//     }
//     return state;
//   };
  
//   export default rootReducer;