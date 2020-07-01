import React, { useState } from 'react';

import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
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
              <NavItem>
                <NavLink href="/createurl">Create Company Website</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/createstore">Create Store</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          
        </Navbar>
      </div>
    );
  }

export default MyNavbar;
