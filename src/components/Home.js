import React, { Component } from 'react';
import NavBar from './NavBar';
import Data from './Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="App container-fluid" id="home">
        <NavBar />
        <Data />
      </div>
    );
  }
}

export default Home;
