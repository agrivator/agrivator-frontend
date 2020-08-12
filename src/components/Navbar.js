import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav id="nav" className="navbar navbar-expand-sm navbar-dark bg-primary-1 fixed-top">
                <NavLink className="navbar-brand text-white smooth-goto" to="" >
                    AGRIVATOR
                    {console.log("included")}
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto font-weight-light">
                        <li className="nav-item ">
                            <NavLink className="nav-link smooth-goto active" to="home">HOME</NavLink>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link smooth-goto" href="#about">Upload CSV</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
