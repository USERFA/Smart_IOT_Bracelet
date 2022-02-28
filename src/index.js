import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'fa-icons';
import 'font-awesome/css/font-awesome.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));
registerServiceWorker();
