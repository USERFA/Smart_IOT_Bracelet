import React, { Component } from 'react';
import '../../App.css';

class Patient extends Component {
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
        <h1 className="title">Patients</h1>
        <h4 className="title1">Date {this.props.room_no}</h4>
        <input className="form-control search" placeholder="Chercher" />
        <br />

        {
         /* ({ loading, error, data }) => {
            if(loading)

            if(error)
              return <p>Check your internet connection</p>;

            if(data.patient.length == 0)
              return <h3>No patients added yet! :\/ </h3>;

            return data.patient.map((p) => ( */
            <div className="row dab">
                <div className="col-md-12 box1">
                  <div className="row">
                    <div className="col-md-3">
                      <h2 className="header">NOM</h2>
                      <h5 className="head_val">nom</h5>
                    </div>
                    <div className="col-md-1">
                      <h2 className="header">AGE</h2>
                      <h5 className="head_val">age</h5>
                    </div>
                    <div className="col-md-4">
                      <h2 className="header">RYTHME CARDIAQUE</h2>
                      <h5 className="head_val">rythme</h5>
                    </div>
                    <div className="col-md-2">
                      <h2 className="header">TENSION ARTERIELLE</h2>
                      <h5 className="head_val">tension</h5>
                    </div>
                    <div className="col-md-2">
                      <h2 className="header">TEMPERATURE</h2>
                      <h5 className="head_val">temp</h5>
                    </div>
                  </div>
                  <div className="arrow1">
                    <a href="#" onClick={this.select.bind(this, "chat")}><i className="fas fa-arrow-right icon"></i></a>
                  </div>
                </div>
              </div>
         //   ))
          //}
        }



      </div>
    )
  }
}

export default Patient;
