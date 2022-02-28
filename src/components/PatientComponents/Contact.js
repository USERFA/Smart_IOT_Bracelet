import React, { Component } from 'react';
import Heartbeat from 'react-heartbeat';


import AllNotesDocs from './AllNotesDocs';
import '../../App.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dosage: "",
      medicine: "",
      note: "",
    }
  }

  
  dosage(e) {
    this.setState({ dosage: e.target.value });
  }

  medicine(e) {
    this.setState({ medicine: e.target.value });
  }

  note(e) {
    this.setState({ note: e.target.value });
  }

  select(val, e) {
    this.props.func(val);
  }

  createNote(addNote, e) {
    const { dosage, medicine, note } = this.state;
    const desp = dosage+","+medicine+","+note;
    var today = new Date();
    var time = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    console.log(this.props.pat_id, desp, time);
    addNote({
      variables: { type: "nurse", patient_id: this.props.pat_id, desp: desp, time: time },

    });
  }
 
  render() {
    const { pat_id } = this.props;
    const heartbeat =
        this.state.paused === true ? null : (
        <Heartbeat heartbeatFunction={this.count} heartbeatInterval={50} />
        );
    return (
        
        
           <div className="container-fluid patient">
             <h1 className="title">Doc</h1>
             <h4 className="title1">PATIENT ID. {this.props.pat_id}</h4>
             <br />
              <div className="chat_room">
                  <div className="top_nav">
                    <div className="row">
                      <div className="col-md-1">
                        <a href={"/rooms"} className="arr"><i className="fas fa-arrow-left icons"></i></a>
                      </div>
                      <div className="col-md-1">
                        <i className="far fa-user icon_left2"></i>
                      </div>
                      <div className="col-md-5">

                        

                      </div>
                      <div className="col-md-5">
                        <i className="fas fa-share-square icon_left_sq" onClick={this.select.bind(this, "doctor")}></i>
                      </div>
                    </div>
                  </div>

                   <div className="chat_area">
                     <div className="row">
                       <div className="col-md-10">
                         <input className="add_note" placeholder="ajouter une note" onChange={this.note.bind(this)}/>
                       </div>
                       <div className="col-md-2">
                          <button className="btn btn-default note_add" onClick={this.createNote.bind(this)}>Envoyer</button>
                       </div>
                     </div>
                   </div>
               </div>
            </div>
         )
       }
   
       
  }


export default Contact;
