import React, { Component } from 'react';
import Heartbeat from 'react-heartbeat';
import CanvasJSReact from '../../canvasjs.react';

import AllNotesPatients from './AllNotesPatients';
import AllNotesDocs from './AllNotesDocs';
import '../../App.css';



var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dosage: "",
      medicine: "",
      note: "",
    }


    this.generateDataPoints = this.generateDataPoints.bind(this);
	}
	
	generateDataPoints(noOfDps) {
		var xVal = 1, yVal = 80;
		var dps = [];
		for(var i = 0; i < noOfDps; i++) {
			yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
			dps.push({x: xVal,y: yVal});	
			xVal++;
		}
		return dps;
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


    const options = {
			theme: "light2", // "light1", "dark1", "dark2"
			animationEnabled: true,
			zoomEnabled: true,
			title: {
				text: "Rythme Cardiaque"
			},
			data: [{
				type: "area",
				dataPoints: this.generateDataPoints(200)
			}]
		}


    const { pat_id } = this.props;
    const heartbeat =
        this.state.paused === true ? null : (
        <Heartbeat heartbeatFunction={this.count} heartbeatInterval={50} />
        );
    return (
        
        
           <div className="container-fluid patient">
             <h1 className="title">Details du Patient </h1>
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
                        



<CanvasJSChart options = {options} 
				 onRef={ref => this.chart = ref} 
			/>
                        

                      <div className="col-md-6">
                        <AllNotesDocs patient_id={this.props.pat_id} />
                      </div>
                    </div>
                  </div>


               

                  <div className="row" >
 
                <div className="col-md-6 box">
                  <div className="row dat">
                    <div className="col-md-6">
                      <h2 className="header">Température</h2>
                      <h5 className="head_val"> {(36 + Math.random() * (40 - 36)).toFixed(2)}</h5>
                    </div>
                 
                  </div>
                  <div className="row dat">
                    <div className="col-md-6">
                      <h2 className="header">Tension Artétielle</h2>
                      <h5 className="head_val">{(135 + Math.random() * (145 - 135)).toFixed(0)}/85</h5>
                    </div>
              </div>
               </div>
            </div>


            <div className="inp_form">
                     <div className="row">
                       <div className="col-md-10">
                         <input className="add_note" placeholder="ajouter une note" onChange={this.note.bind(this)}/>
                       </div>
                       <div className="col-md-2">
                          <button className="btn btn-default note_add" onClick={this.createNote.bind(this)}>Ajouter une note</button>
                       </div>
                     </div>
                   </div>
                   
            </div>            </div>

         )
       }
   
       
  }


export default Chat;
