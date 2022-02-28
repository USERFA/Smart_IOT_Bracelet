import React, { Component } from 'react';

import '../../App.css';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribed: "",
    }
  }

  select(val, e) {
    this.props.func(val);
  }

  subscribeDoc(patients, pat_id, doc_id, subscribe, e) {
    var new_patients = patients;
    var flag = 0;
    for(var i=0;i<new_patients["id"].length;i++) {
      if(new_patients["id"][i] === parseInt(pat_id)) {
          flag = 1;
          break;
      }
    }
    if(flag === 1) {
      this.setState({ subscribed: "Doctor already subscribed!" });
    }
    else {
      new_patients["id"].push(parseInt(pat_id));
      subscribe({
        variables: { id: doc_id, patients: new_patients },
      });
      this.setState({ subscribed: "Doctor subscribed!" });
    }
  }

  render() {
    const { pat_id } = this.props;
    return (
      <div className="container-fluid patient">
        <h1 className="title">Messages</h1>
        <input className="form-control search" placeholder="Chercher" />&nbsp;&nbsp;&nbsp;<h4>{this.state.subscribed}</h4>
        <br />

        {
          //({ loading, error, data }) => {
            //if(loading)

            //if(error)
              //return <p>Check your internet connection</p>;

           // return data.doctors.map((p) => (
             // <div className="row dab" key={p.id}>
             <div className="row dab" >
                <div className="col-md-12 box1">
                  <div className="row">
                    <div className="col-md-4">
                      <h2 className="header">Nom du patient</h2>
                      <h5 className="head_val">nom ici</h5>
                    </div>
                    <div className="col-md-4">
                      <h2 className="header">Message</h2>
                      <h5 className="head_val">bla bla</h5>
                    </div>
                    <div className="col-md-4">
                      <h2 className="header">qlq chose</h2>
                      <h5 className="head_val">bla bla</h5>
                    </div>



                    <div className="arrow1">
                  <a href={"#" } onClick={this.select.bind(this, "chat")}><i className="fas fa-plus icon"></i></a>

                  </div>
                    {
                      (subscribe, { data }) => (
                        <div className="arrow1">
                        </div>
                      )
                    }

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

export default Notification;
