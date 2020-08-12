import React, { Component } from 'react'
import './LoginForm.css';
class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <section className="main-card">
                    <div className="card-content">
                        <div className="content-right">
                            <div className="header">
                                <img src="logo.png" alt="logo" width="50px" height="50px" />
                                <h1  >AGRIVATOR</h1><br />
                            </div>
                            <br />
                            <p>Hi there,<br />
                                Login to Agrivator data <br />entry panel using your <br />
                                username and password </p>
                        </div>
                        <div className="content-left">
                        <div className="container">
                            <form>
                                <div className="group">      
                                  <input type="text" required />
                                  <span className="highlight"></span>
                                  <span className="bar"></span>
                                  <label>Username</label>
                                </div>
                                  
                                <div className="group">      
                                  <input type="Password" required />
                                  <span className="highlight"></span>
                                  <span className="bar"></span>
                                  <label>Password</label><br /> <br />
                                  <button className="btn btn-success " onClick={this.props.submitHandler} >Login</button>
                                
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </section>              
                 
            </div>
        )
    }
}

export default LoginForm
