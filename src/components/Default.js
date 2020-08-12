import React from 'react';
import {Link} from 'react-router-dom'

function Default() {
    return (
        <div>
            <br />
            <span className="text-danger">app.js in dev mod</span>
            <br />
            <br />
            <span className="text-danger">app.js is for configuring authentication mechanism</span>
            <br />
            <br />
            <br />
        Go to localhost:PORT/home ==> <Link to='/home'> Home page </Link><br />
        Go to localhost:PORT/login ==> <Link to='/login'> Login page </Link> <br />

        </div>
    )
}

export default Default;
