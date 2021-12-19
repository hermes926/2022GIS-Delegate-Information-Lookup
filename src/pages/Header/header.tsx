import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from "../../images/logo.png";
import "./header.css";

const Header = () => {
    return (
        <>
            <Navbar expand="lg" variant="dark" sticky="top" className="Header">
                <Container fluid>
                    <Navbar.Brand href="/" style={{ marginLeft: '1%' }}>
                    <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"/>{' '}
                        GIS Delegate Info Lookup
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Item style={{ marginLeft: '1%' }}>
                                <Nav.Link href="/lending">Announements</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginLeft: '1%' }}>
                                <Nav.Link href="/home">{"SignIn"}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginLeft: '1%' }}>
                                <Nav.Link href="/info">Schedule</Nav.Link>
                            </Nav.Item>
                            <Nav.Item style={{ marginLeft: '1%' }}>
                                <Nav.Link href="/map">Map</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
