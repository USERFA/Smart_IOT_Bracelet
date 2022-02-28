import React, { Component } from 'react';

import '../../App.css';
import MainNavBar from './../DoctorComponents/MainNavBar';
import MenuBar from './MenuBarP';

class Patientdash extends Component {
  constructor(props) {
    super(props);
  }

  select(val, e) {
    this.props.func(val);
  }

  render() {

    const { pat_id } = this.props;

    return (
      <div className="container-fluid patient">


          
          
      
        {
         /* ({ loading, error, data }) => {
            if(loading)
              return <TodoLoaderNotes />
            if(error)
              return <p>Error</p>;

            return data.patient.map((p) => ( */
              <div className="row dab">
                <div className="col-md-12 box1">
                  <div className="row">
                    <div className="col-md-3">
                      <h2 className="header">NOM DU PATIENT</h2>
                      <h5 className="head_val">nom</h5>
                    </div>
                    <div className="col-md-1">
                      <h2 className="header">AGE</h2>
                      <h5 className="head_val">age</h5>
                    </div>
                    <div className="col-md-4">
                      <h2 className="header">RYTHME CARDIAQUE</h2>
                      <h5 className="head_val"><i className="fas fa-check "></i></h5>
                    </div>
                    <div className="col-md-2">
                      <h2 className="header">TENSION ARTERIELLE</h2>
                      <h5 className="head_val"><i className="fas fa-check "></i></h5>
                    </div>

                    <div className="col-md-2">
                      <h2 className="header">TEMPERATURE</h2>
                      <h5 className="head_val"><i className="fas fa-check "></i></h5>
                    </div>

                  </div>
                  <div className="arrow1">
                    <a href="#" onClick={this.select.bind(this, "chat")}><i className="fas fa-arrow-right icon"></i></a>
                  </div>
                </div>
              </div>
           // ))
          //}
        }

</div>
       
    )
  }
}

export default Patientdash;
