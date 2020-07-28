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
                <section class="main-card">
                    <div class="card-content">
                        <div class="content-right">
                            <div class="header">
                                <img src="logo.png" alt="logo" width="50px" height="50px" />
                                <h1>AGRIVATOR</h1><br />
                            </div>
                            <br />
                            <p>Hi there,<br />
                                Login to Agrivator data <br />entry panel using your <br />
                                username and password </p>
                        </div>
                        <div class="content-left">
                        <div class="container">
                            <form>
                                <div class="group">      
                                  <input type="text" required />
                                  <span class="highlight"></span>
                                  <span class="bar"></span>
                                  <label>Username</label>
                                </div>
                                  
                                <div class="group">      
                                  <input type="Password" required />
                                  <span class="highlight"></span>
                                  <span class="bar"></span>
                                  <label>Password</label><br /> <br />
                                  <button class="btn" onClick={this.props.submitHandler} >Login</button>
                                
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
