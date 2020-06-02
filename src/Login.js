import React, { Component } from 'react'

import LoginForm from './components/LoginForm'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <div className="text-danger">This is login page</div>
                <LoginForm/>
            </div>
        )
    }
}

export default Login
