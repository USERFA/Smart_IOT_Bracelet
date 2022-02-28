import React, { Component } from 'react';

import '../../App.css';

class Start extends Component {

  constructor(props) {
    super(props);
  }

  select(val, e) {
    this.props.func(val);
  }

  render() {
    const { room_no } = this.props;

    return (

<div className="container-fluid patient">
<h1 className="title">Patients en cas de danger</h1>

        <div className="cont">

        <div className="row dab">
                <div className="col-md-12 box1">
                  <div className="row">

                  <div className="col-md-3">
                      <h2 className="header">NOM</h2>
                      <h5 className="head_val">n</h5>
                    </div>
                    <div className="col-md-1">
                      <h2 className="header">PRENOM</h2>
                      <h5 className="head_val">n</h5>
                    </div>
                    <div className="col-md-4">
                      <h2 className="header">AGE</h2>
                      <h5 className="head_val">g </h5>
                      <div className="p_bar">

                      </div>
                    </div>
                    <div className="col-md-2">
                      <h2 className="header">ADRESSE</h2>
                      <h5 className="head_val">b</h5>
                    </div>
                   
                   
                  </div>
                  <div className="arrow1">

                   <a href="#" onClick={this.select.bind(this, "chat")}><i className="fas fa-info icon"></i></a>
  
                   </div>
                </div>
              </div>
        </div>
      </div>
          )
  }
}

export default Start;
