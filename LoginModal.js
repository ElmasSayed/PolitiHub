import React, { Component } from 'react';
import Modal from 'react-modal';

export default class LoginModal extends Component{
    
    constructor(){
        super();
        this.state = {
            isLoginActive: false
        }
    }

    componentWillMount(){
        Modal.setAppElement('body');
    }

    login(){
        var loginid = document.getElementById("email_address").value;
        //make an api call and see if the login id exist in database
        //if true 
            sessionStorage.setItem("LoginID", loginid);
            this.props.changeIsLoginActive();
        //else
        //invalid user
    }

    render(){
        return (

            <Modal isOpen={this.props.isLoginActive} onRequestClose={this.props.changeIsLoginActive}>

                <div>
                    <div>
                        <button type="button" className="close" onClick={this.props.changeIsLoginActive}>&times;</button>
                        <h4 className="modal-title">Login</h4>
                    </div>
                    <div>
                        <div className="control">
                            <div placeholder="johndoe@email.com">Email Address</div>
                            <input type="text" className="form-control" id="email_address" />
                        </div>
                        <div className="control">
                            <div>Password</div>
                            <input type="password" className="form-control" name="password" />
                        </div>
                        <button className="btn btn-orange login-btn" onClick={this.login.bind(this)}>Login</button>
                    </div>
                    <div className="modal-footer">
                        <p>Don't have an account</p>
                        <a href="#" data-toggle="modal" data-target="#signupModal">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Signup here</button>
                        </a>
                    </div>
                </div>

            </Modal>
        )

    }
}
