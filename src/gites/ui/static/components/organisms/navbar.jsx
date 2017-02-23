import React from 'react'
import { Navbar } from 'react-bootstrap'


const MainNavbar = (props) => {
    return (
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
                <a href={ props.href }>{ props.text }</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
    )
}

export default MainNavbar