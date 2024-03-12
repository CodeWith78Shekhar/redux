import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Redux imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Services/Reducer/Index'; // Check path and file extension
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
