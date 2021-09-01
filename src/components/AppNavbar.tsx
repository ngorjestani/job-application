import React, {FunctionComponent} from "react";
import Navbar from "react-bootstrap/Navbar";
import {Button, Form, FormControl, Nav} from "react-bootstrap";

interface IAppNavbarProps {
}

export const AppNavbar: FunctionComponent<IAppNavbarProps> = (props) => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    );
};