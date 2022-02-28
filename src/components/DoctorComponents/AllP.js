import React, { Component } from 'react';
import axios from 'axios';
import {ModifierPat} from './ModifierPat'; 
import {AjouterPat} from './AjouterPat'; 
import {Button,ButtonToolbar} from 'react-bootstrap';

import '../../App.css';

class AllP extends Component {
  constructor(props) {
    super(props);
    this.deleteVoiture = this.deleteVoiture.bind(this);

    this.state={pat:[], AjouterPatShow:false, ModifierPatShow:false}

  }


  componentDidMount(){
    axios.get("http://127.0.0.1:8000/patient/")
    .then(Response => Response.data)
    .then((data)  => {
      this.setState({pat:data});

    })
  }



  select(val, e) {
    this.props.func(val);
  }


  
 /*

    deleteDep(
      
      
    ){
        if(window.confirm('Vous etes sure?')){
            fetch(process.env.REACT_APP_API+'patient/'+patID,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    } */

  
    deleteVoiture = (patID) => {
      axios.delete("http://127.0.0.1:8000/patient/"+patID)
        .then(response => {
          if(response.data != null){
              this.setState({ show: true });
              this.setState({
                //  patient: this.state.Patients.filter(patient => pat.PatientId !== patID)
                })
                window.location.reload(false)
          }
        })
    };

  render() {
    
    const {pat, patID, patname, patAdress, patAge, patCIN}=this.state;
        let AjouterPatClose=()=>this.setState({AjouterPatShow:false});
        let ModifierPatClose=()=>this.setState({ModifierPatShow:false});




    return (


     <div className="container-fluid patient">
        <h1 className="title">Tous Les Patients</h1>
        <input className="form-control search" placeholder="Chercher" />
        <br />
        <div className="arrow1">
                    <a href="/AjouterPat"><i className="fas fa-user-plus icon"></i></a>
                  </div>
                  <br />
                  <br />
        {
      
<div>
      {this.state.pat.map((p)=> (

               <div className="row dab" key={p.PatientId}>
                <div className="col-md-12 box1">
                  <div className="row">
                    <div className="col-md-3">
                      <h2 className="header">Nom</h2>
                      <h5 className="head_val">{p.PatientName}</h5>
                    </div>

                    <div className="col-md-1">
                      <h2 className="header">CIN</h2>
                      <h5 className="head_val">{p.PatientCin}</h5>
                    </div>
                    <div className="col-md-4">
                      <h2 className="header">AGE</h2>
                      <h5 className="head_val">{p.PatientAge}</h5>
                      <div className="p_bar">

                      </div>
                    </div>
                    <div className="col-md-2">
                      <h2 className="header">ADRESSE</h2>
                      <h5 className="head_val">{p.PatientAdress}</h5>
                    </div>
                   

<ButtonToolbar>
    <Button className="mr-2" variant="info"
    onClick={()=>this.setState({ModifierPatShow:true,
        patID:pat.PatientId,
        patname:pat.PatientName,
        patCIN:pat.PatientCin,
        patAge:pat.PatientAge,
        patAdress:pat.PatientAdress
        })}>
            Modifier
        </Button>

        <Button className="mr-2" variant="danger"
    //onClick={()=>this.deleteDep(p.PatientId)}>
      onClick={this.deleteVoiture.bind(this,p.PatientId)}>
            Supprimer
        </Button>
       
        <ModifierPat show={this.state.ModifierPatShow}
        onHide={ModifierPatClose}
        patID={patID}
        patname={patname}
        patCIN={patCIN}
        patAge={patAge}
        patAdress={patAdress}/>

     
</ButtonToolbar>





                   
                  </div>
                  <div className="arrow1">
                  <a href={"#" + p.PatientId} onClick={this.select.bind(this, "chat")}><i className="fas fa-info icon"></i></a>

                  </div>
                </div>
              </div>
      )
      )
  }
      
              
</div>
  }
</div>



    )
  }
}

export default AllP;
