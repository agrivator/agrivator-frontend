import React, { Component, useState} from 'react'
import axios from 'axios'

import LoginForm from './components/LoginForm'

const Login = () => {
        const [user, setUser] = useState({});
        // * username can be either email or username
        const [username, setUsername] = useState("bonnietest");
        const [password, setPassword] = useState("bonnietest");

        // *Function to fetch token and user details from strapi
        // @args : username and password
        const fetchLogin = async (usr, pwd) => {
            
            const response = await axios.post('http://dart-agrivator.herokuapp.com/auth/local', {
                identifier: usr,
                password:pwd
            })
            return response.data;
            
        }

        // *Function to handle submit event
        const submitHandler = (e) => {
            e.preventDefault();

            // Fetching data from strapi
            const data = fetchLogin(username, password);
            console.log(data);
        }

        return (
            <div>
                <div className="text-danger">This is login page</div>
                <LoginForm submitHandler={submitHandler}/>
            </div>
        )
    
}

export default Login;
