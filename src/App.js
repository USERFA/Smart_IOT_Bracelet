import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import LoginP from './components/LoginP';
import Patientdash from './components/PatientComponents/Patientdash';
import AjouterPat from './components/DoctorComponents/AjouterPat';
import PatAcc from './components/PatientComponents/PatAcc';

//import Patient from './components/Patient';
import Docs from './components/DoctorComponents/Docs';
//import DocChat from './components/DocChat';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';




class App extends Component {
  render() {
  return (   

<div className="App container-fluid">

          <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/Login" exact={true} component={Login} />
          <Route path="/docs" exact={true} component={Docs} />
          <Route path="/LoginP" exact={true} component={LoginP} />
          <Route path="/Patientdash" exact={true} component={Patientdash} />
          <Route path="/AjouterPat" exact={true} component={AjouterPat} />
          <Route path="/PatAcc" exact={true} component={PatAcc} />

          </Switch>

        </div>

);
  }

}
export default App;
