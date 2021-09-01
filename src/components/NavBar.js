import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink to='/pages/about' activeStyle={{ color: '#c6cacc' }} className='nav-link'>About</NavLink>
                        <NavLink to='/pages/contacts' activeStyle={{ color: '#c6cacc' }} className='nav-link'>Contacts</NavLink>
                        <NavLink to='/pages/content' activeStyle={{ color: '#c6cacc' }} className='nav-link'>Content</NavLink>
                        <NavLink to='/pages/projects' activeStyle={{ color: '#c6cacc' }} className='nav-link'>Projects</NavLink>
                        <NavLink to='/pages/services' activeStyle={{ color: '#c6cacc' }} className='nav-link'>Services</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink to='/pages/admin' activeStyle={{ color: '#c6cacc' }} style={{ textDecoration: 'none', color: 'gray' }}>Admin</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;
