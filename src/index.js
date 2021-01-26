import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./js/store/index";
import './index.css';
import App from './js/components/App';

ReactDOM.render(
  // The provider makes the Redux store available to any nested components that have been wrapped in the connect() function
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

