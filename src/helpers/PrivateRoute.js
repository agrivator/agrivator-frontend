import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {getAuthToken} from './authStore';

export const PrivateRoute = ({component:Component, ...rest}) => {
    
    return(
        <Route 
        {...rest}
        render={props => 
        getAuthToken() ? (
            <Component {...props} />
        ) : (
            <Redirect 
                to={{
                    pathname:'/login',
                    // state: {from: props.location }
                }}
            />
        )
        }
    
        />
    )
};
