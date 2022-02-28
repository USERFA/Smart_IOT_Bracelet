import React,{Component} from 'react';
import axios from 'axios';

import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class ModifierPat extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
      
    }

    handleSubmit(event){
        event.preventDefault();

     
        
        fetch(process.env.REACT_APP_API+'patient',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                PatientId:event.target.PatientId.value,
                PatientName:event.target.PatientName.value,
                PatientAdress:event.target.PatientAdress.value,
                 PatientAge:event.target.PatientAge.value,
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

/*
handleSubmit = event => {
    event.preventDefault();
    const user = {
      name: this.state.PatName,
      age: this.state.patAge,
      add: this.state.patAdress,
      cin: this.state.patCIN
    }
    axios.put("http://127.0.0.1:8000/patient/", { user })
      .then(res=>{
        console.log(res);
        console.log(res.data);
        //window.location = "/retrieve" This line of code will redirect you once the submission is succeed
      })
  }
  */






    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
Modifier Patient        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="PatientID">
                        <Form.Label>PatientID</Form.Label>
                        <Form.Control type="text" name="PatientID" required
                        
                        defaultValue={this.props.patID} 
                        placeholder="Name"/>
                    </Form.Group>

                    <Form.Group controlId="PatientName">
                        <Form.Label>Nom du Patient</Form.Label>
                        <Form.Control type="text" name="PatientName" required 
                        defaultValue={this.props.patname}
                        placeholder="Patient Name"/>
                    </Form.Group>


                    <Form.Group controlId="PatientAge">
                        <Form.Label>Age du Patient</Form.Label>
                        <Form.Control type="text" name="PatientAge" required 
                        defaultValue={this.props.patAge}
                        placeholder="Patient Age"/>
                    </Form.Group>


                    <Form.Group controlId="PatientAdress">
                        <Form.Label>Adresse du Patient</Form.Label>
                        <Form.Control type="text" name="PatientAdress" required 
                        defaultValue={this.props.patAdress}
                        placeholder="Patient Adress"/>
                    </Form.Group>


                    <Form.Group controlId="patientCIN">
                        <Form.Label>CIN du Patient</Form.Label>
                        <Form.Control type="text" name="Patient CIN" required 
                        defaultValue={this.props.patCIN}
                        placeholder="Patient CIN"/>
                    </Form.Group>




                  


                    <Form.Group>
                        <Button variant="primary" type="submit">
Valider                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Fermer</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}
