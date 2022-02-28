import React, { Component } from 'react';

import '../../App.css';

class WardP extends Component {
  constructor(props) {
    super(props);
  }

  select(val, e) {
    this.props.func(val);
  }

  render() {
    return (
      <div className="container-fluid room">
        <h1 className="title">Rendez-vous</h1>
        <input className="form-control search" placeholder="Chercher" />
        <br />

        {
         // ({ loading, error, data }) => {
           // if(loading)

            //if(error)
              //return <p>Error </p>;

            //if(data.room.length == 0)
              //return <h3>Pas de Rendez-vous! :\/ </h3>;

            //return data.room.map((r) => (
              <div className="row" >
                <div className="col-md-6 box">
                  <div className="row dat">
                    <div className="col-md-6">
                      <h2 className="header">Rndv.</h2>
                      <h5 className="head_val">rdv</h5>
                    </div>
                    <div className="col-md-6">
                      <h2 className="header">Date</h2>

                    </div>
                  </div>
                  <div className="row dat">
                    <div className="col-md-6">
                      <h2 className="header">Nom!</h2>
                      <h5 className="head_val">doc</h5>
                    </div>
                    <div className="col-md-6">

                    </div>
                  </div>
                  <div className="arrow">
                    <a href='#' onClick={this.select.bind(this, "patient")}><i className="fas fa-arrow-right icon"></i></a>
                  </div>
                </div>
              </div>
          //  ))
          //}
        }

      </div>
    )
  }
}

export default WardP;
