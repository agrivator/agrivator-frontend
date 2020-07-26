import React, { Component, useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom';
import axios from 'axios'

import LoginForm from './components/LoginForm'

import {storeUser, storeToken, getAuthToken} from './helpers/authStore';

const Login = (props) => {
        const [user, setUser] = useState({});
        // * username can be either email or username
        const [username, setUsername] = useState("bonnietest");
        const [password, setPassword] = useState("bonnietest");
        // *To check if token present in localStorage
        const [isToken, setIsToken] = useState("");

        useEffect(() => {
            const token = getAuthToken(); 
            if(token){
                setIsToken(token);
                // props.history.push('/home'); 
            }
        }, [])
        
        useEffect(() => {
            if(isToken && isToken != ''){
                props.history.push('/home');
            }
        }, [isToken])

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
        const submitHandler = async (e) => {
            e.preventDefault();

            // *Fetching data from strapi
            const data = await fetchLogin(username, password);

            // *Storing token and user data to localStorage
            storeUser(data.user);
            storeToken(data.jwt);
            setIsToken(data.jwt);
        }



        return (
            <div>
                <div className="text-danger">This is login page</div>
                <LoginForm submitHandler={submitHandler}/>
            </div>
        )
    
}

export default Login;
