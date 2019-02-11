import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from "../../Auth";
import "./style.css";

// Navbar for each page
class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  signOut = () => {
    auth0Client.signOut();
    this.props.history.replace('/');
  }

  render() {
    return (
        <Navbar color="white" light expand="md" className="sticky-top">
          <NavbarBrand href="/">
            <img src="../images/cdi-logo.png" className="brandImage ml-5" alt="CDI" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto mr-5 mt-4" navbar>
              <NavItem>
                <NavLink href="/kids/" className="mr-4">Kids</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"/donors/1"}className="mr-4">Donors</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/admin" className="mr-4">Admin</NavLink>
              </NavItem>
              {!auth0Client.isAuthenticated() ? (
                <NavItem>
                  <NavLink onClick={auth0Client.signIn}>Log In</NavLink>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink onClick={() => {this.signOut()}}>Log Out</NavLink>
                </NavItem>
              )}
              
              
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default withRouter(MainNavbar);