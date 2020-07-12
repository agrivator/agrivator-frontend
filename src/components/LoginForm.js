import React, { Component } from 'react'

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                 ------  Login Form ------ 
                 <button onClick={this.props.submitHandler} className="btn btn-danger">Login</button>
            </div>
        )
    }
}

export default LoginForm
