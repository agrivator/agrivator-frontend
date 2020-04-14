import React from 'react'

/**CSS Imports */
import './sidebar.css';

/**Bootstrap Imports */
import Nav from 'react-bootstrap/Nav'



const SideBar = () => {
    return (
        <Nav defaultActiveKey="/home" fill={true} justify={true} className="sidebar flex-column justify-center">
            <Nav.Link href="/home">Active</Nav.Link>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link>
        </Nav>
    )
}

export default SideBar
