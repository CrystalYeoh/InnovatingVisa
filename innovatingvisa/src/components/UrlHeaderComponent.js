import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Row,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    if (this.props.headertext != "")
      return (
        // <div>
        // <Navbar dark expand="md">
        // <div className="container">
        //       <NavbarToggler onClick={this.toggleNav} />
        //       <NavbarBrand className="mr-auto" href="/">
        //         <img
        //           src="assets/images/logo.png"
        //           height="30"
        //           width="41"
        //           alt="Ristorante Con Fusion"
        //         />
        //       </NavbarBrand>
        //       <Collapse isOpen={this.state.isNavOpen} navbar>
        //         <Nav navbar>
        //           <NavItem>
        //             <NavLink className="nav-link" to="/home">
        //               <span className="fa fa-home fa-lg"></span> Home
        //             </NavLink>
        //           </NavItem>
        //           <NavItem>
        //             <NavLink className="nav-link" to="/aboutus">
        //               <span className="fa fa-info fa-lg"></span> About Us
        //             </NavLink>
        //           </NavItem>
        //           <NavItem>
        //             <NavLink className="nav-link" to="/menu">
        //               <span className="fa fa-list fa-lg"></span> Menu
        //             </NavLink>
        //           </NavItem>
        //           <NavItem>
        //             <NavLink className="nav-link" to="/contactus">
        //               <span className="fa fa-address-card fa-lg"></span> Contact
        //               Us
        //             </NavLink>
        //           </NavItem>
        //         </Nav>
        //       </Collapse>
        // </Navbar>
        <Jumbotron>
          <img id="jumtronimage" src={this.props.image} alt="Logo" />

          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>{this.props.headertext}</h1>
                <p>{this.props.headersubtext}</p>
              </div>
            </div>
          </div>
        </Jumbotron>
        // </div>
      );
    else return <div></div>;
  }
}

export default Header;
