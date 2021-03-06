import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import store from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

