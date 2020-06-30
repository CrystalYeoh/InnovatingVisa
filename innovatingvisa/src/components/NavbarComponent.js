import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Form,
    Input,
    FormGroup,
    Button,
    Label,
  } from 'reactstrap';

const MyNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div style={{textAlign: "left", backgroundColor: "white"}}>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Visa Marketplace</NavbarBrand>
          {/* <NavbarToggler onClick={toggle} /> */}
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/dashboard">Merchant Listings</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="search" className="mr-sm-2">Search:</Label>
              <Input type="Search" name="Search:" id="search" placeholder="" />
              <Button variant="outline-success">Search</Button>
            </FormGroup>
            
          </Form>
        </Navbar>
      </div>
    );
  }

export default MyNavbar;
