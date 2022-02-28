import React, { Component } from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

import '../../App.css';

// <input type="text" value={this.state.value} onChange={this.handleChange} />

class AjouterPat extends Component {
  
  constructor(props){
    super(props);
    this.handleSubmit=this.handleSubmit.bind(this);
}


  
handleSubmit(event){
  event.preventDefault();
  fetch("http://127.0.0.1:8000/patient/",{
      method:'POST',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
        PatientId:event.target.PatientId.value,
          PatientName:event.target.PatientName.value,
          PatientAge:event.target.PatientAge.value,
          PatientAdress:event.target.PatientAdress.value,
          PatientCin:event.target.PatientCin.value,
          idMédecin:event.target.idMédecin.value



      })
  })
  .then(res=>res.json())
  .then((result)=>{
      alert(result);
  },
  (error)=>{
      alert('Echec');
  })
}






   

render(){
  return (
 

          <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="PatientId">

              <Form.Label>id</Form.Label>
                  <Form.Control type="text" name="PatientId" required 
                  placeholder="id du patient"/>

                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" name="PatientName" required 
                  placeholder="Nom du patient"/>





<Form.Label> Age</Form.Label>
                  <Form.Control type="text" name="PatientAge" required 
                  placeholder="Age"/>


<Form.Label>Adresse</Form.Label>
                  <Form.Control type="text" name="PatientAdress" required 
                  placeholder="Adresse"/>


<Form.Label>Cin</Form.Label>
                  <Form.Control type="text" name="PatientCin" required 
                  placeholder="CIN"/>


<Form.Label>Medecin</Form.Label>
                  <Form.Control type="text" name="idMédecin" required 
                  placeholder="medecin"/>

              </Form.Group>

              <Form.Group>
                  <Button variant="primary" type="submit">
Ajouter                  </Button>
              </Form.Group>
          </Form>
      

      
  )
  
}

  }
  
  export default AjouterPat;
