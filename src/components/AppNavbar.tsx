import React, {FunctionComponent} from "react";
import Navbar from "react-bootstrap/Navbar";
import {Button, Form, FormControl} from "react-bootstrap";

interface IAppNavbarProps {
}

export const AppNavbar: FunctionComponent<IAppNavbarProps> = (props) => {
    return (
        <Navbar bg="primary" variant="light" className="d-flex">
            <Navbar.Brand href="#home">Yellowstone</Navbar.Brand>
            <Form inline className="ml-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-dark">Search</Button>
            </Form>
        </Navbar>
    );
};