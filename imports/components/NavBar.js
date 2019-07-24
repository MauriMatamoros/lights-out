import React from 'react'
import { NavLink as RRNavLink } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'

export default class NavBar extends React.Component {
    state = {
        isOpen: false
    }

    toggle = () => this.setState(() => ({ isOpen: !this.state.isOpen }))

    render() {
        return (
            <div>
            <Navbar color="info" light expand="md">
                <NavbarBrand tag={RRNavLink} exact to="/alert" style={{ color: 'white' }}> Inicio </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink tag={RRNavLink} exact to="/map" style={{ color: 'white' }}>Mapa</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.eeh.hn/es/noticias/" target="_blank" style={{ color: 'white' }}>Anuncios</NavLink>
                    </NavItem>
                </Nav>
                </Collapse>
            </Navbar>
            </div>
        )
    }
}