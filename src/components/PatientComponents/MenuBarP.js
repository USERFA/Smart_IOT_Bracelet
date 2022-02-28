import React, { Component } from 'react';
import '../../App.css';
import 'font-awesome/css/font-awesome.min.css'

class MenuBarP extends Component {
  constructor(props) {
    super(props);
  }

  select(val, e) {
    this.props.func(val);
  }


  render() {
    return (
      <div className="container-fluid menu">



<div className="row each" onClick={this.select.bind(this, "start")}>
            <div className="col-md-4" style={{ textAlign: 'center'}}>
              <i className="fas fa-home icon_left"></i>
            </div>
            <div className="col-md-8 name">
              <h3>Accueil</h3>
            </div>
          </div>



          <div className="row each" onClick={this.select.bind(this, "ward")}>
            <div className="col-md-4" style={{ textAlign: 'center'}}>
              <i className="fas fa-calendar-check icon_left"></i>
            </div>
            <div className="col-md-8 name">
              <h3>Rendez-vous</h3>
            </div>
          </div>

         

          <div className="row each" onClick={this.select.bind(this, "chat")}>
            <div className="col-md-4" style={{ textAlign: 'center'}}>
              <i className="fas fa-comment icon_left"></i>
            </div>
            <div className="col-md-8 name">
              <h3>Contacter le docteur</h3>
            </div>
          </div>
      </div>
    )
  }
}

export default MenuBarP;
