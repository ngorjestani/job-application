import React, {FunctionComponent} from "react";
import Navbar from "react-bootstrap/Navbar";
import {Button, Form, FormControl, Nav} from "react-bootstrap";

interface IAppNavbarProps {
}

export const AppNavbar: FunctionComponent<IAppNavbarProps> = (props) => {
    return (
        <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Yellowstone</Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-light">Search</Button>
            </Form>
        </Navbar>
    );
};