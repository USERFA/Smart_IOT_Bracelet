import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default class Login extends Component {
    render() {
        return (
            <form className="form-control">

            <div className="cont">

                <h3 className="title">LOGIN</h3>

               
                    <label>Email </label>
                    <input type="email" className="form-control search1" placeholder="Email" />
               
                      
                           <label>Mot de Passe</label>
                    <input type="password" className="form-control search1" placeholder="Mot de passe " />
               



                <a href="/Docs" class="btn btn-default my_btn2">Valider</a>
                </div>
     
            </form>
        );
    }
}