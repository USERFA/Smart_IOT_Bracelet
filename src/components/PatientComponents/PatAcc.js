import React, { Component } from 'react';
import MainNavBar from './../DoctorComponents/MainNavBar';
import MenuBar from './MenuBarP';
import Start from './Patientdash';
import Ward from './WardP';
import MenuBarSmall from './../DoctorComponents/MenuBarSmall';
//import Patient from './Patient';
import Chat from './Contact';
//import Notification from './Notification';
//import AllP from './AllP';
import '../../App.css';

class PatAcc extends Component {
  constructor(props) {
    super(props);
    const { room_no, pat_id } = this.props.match.params;
    if(room_no) {
      this.state = {
        open: 1,
        option: "patient",
      }
    }
    else if(pat_id) {
      this.state = {
        open: 1,
        option: "chat",
      }
    }
    else {
      this.state = {
        open: 1,
        option: "start",
      }
    }
  }

  close() {
    var toggle = this.state.open;
    if(toggle === 1)
      this.setState({ open: 0 });
    else
      this.setState({ open: 1 });
  }

  change(val) {
    this.setState({ option: val })
  }

  render() {
    const { open, option } = this.state;
    const { room_no, pat_id, doc } = this.props.match.params;
    if(open === 1) {
      var menu = <MenuBar func={this.change.bind(this)} />;
      var btn = <i className="fas fa-arrow-left icon" onClick={this.close.bind(this)}></i>;
    }
    else {
      var menu = <MenuBarSmall />;
      var btn = <i className="fas fa-arrow-right icon" onClick={this.close.bind(this)}></i>;
    }

    if(option === "start") {
      var display = <Start />;
    }
    else if(option == "ward") {
      var display = <Ward func={this.change.bind(this)} />;
    }
   
    else if(option == "chat") {
      var display = <Chat pat_id={pat_id} func={this.change.bind(this)} />;
    }
  

    return (
      <div className="container-fluid rooms">
        <MainNavBar />
        <div className="row">
          <div className="col-md-3">
            {menu}
          </div>
          <div className="col-md-9">
            {display}
          </div>
        </div>
      </div>
    )
  }
}

export default PatAcc;