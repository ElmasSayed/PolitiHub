import Modal from 'react-modal';
import React, { Component } from 'react';
import './App.css';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';

 class App extends Component{

    constructor(){
        super();
        this.state = {
            isLoginActive: false,
            isSignupActive: false
        }
    }
    
    changeIsLoginActive(e) {
        this.setState({
            isLoginActive: !this.state.isLoginActive,
            isSignupActive: this.state.isSignupActive 
        });
    }  

    changeIsSignupActive(e) {
        this.setState({
            isLoginActive: this.state.isLoginActive,
            isSignupActive: !this.state.isSignupActive
        });
    }  
    
    checkLogin(){
        if (sessionStorage.getItem("LoginID") === null){
            alert("You are not loggrd in")
            return
        }
        alert("You are logged in as : " + sessionStorage.getItem("LoginID"));
    }

    logout(){
        sessionStorage.removeItem("LoginID");
    }

    render() {
        return (
            <div className="container-fluid">

                <div className="row">
                    <div className="col-md-12 app-title">PolitiHub</div>
                </div>

                <button type="button" onClick={this.logout.bind(this)} className="btn btn-info btn-lg">Logout</button>
                <button type="button" onClick={this.checkLogin.bind(this)} className="btn btn-info btn-lg">Who Am I?</button>
                <button type="button" onClick={this.changeIsLoginActive.bind(this)} className="btn btn-info btn-lg">Login</button>
                <LoginModal isLoginActive={this.state.isLoginActive} changeIsLoginActive={this.changeIsLoginActive.bind(this)}/>

                <button type="button" onClick={this.changeIsSignupActive.bind(this)} className="btn btn-info btn-lg">Sign-up</button>
                <SignupModal isSignupActive={this.state.isSignupActive} changeIsSignupActive={this.changeIsSignupActive.bind(this)}/>

            </div>
        );
    }

}
export default App;

