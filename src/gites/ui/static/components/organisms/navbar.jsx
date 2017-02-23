import React from 'react'
import { Navbar } from 'react-bootstrap'


const NavbarOrganism = (props) => {
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

export default NavbarOrganism