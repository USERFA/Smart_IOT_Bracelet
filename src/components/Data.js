import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

class Data extends Component {
  render() {
    return (
      <div className="container-fluid content">
        <h1 className="data">surveiller votre cœur.<br/> suivi en temps <br/> réel.</h1>
        <h5 className="data_down"> <br/></h5>
        <h3 className="data_cont">Vous êtes...</h3>
        <table>
          <tr style={{ width: '500px' }}>
            <td><a href="/Login" className="btn btn-default my_btn">Docteur</a></td>
            <td><a href="/LoginP" className="btn btn-default my_btn1">Patient</a></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Data;
