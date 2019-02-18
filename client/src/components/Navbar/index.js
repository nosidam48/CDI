import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import auth0Client from "../../Auth";
import "./style.css";

// Navbar for each page
class MainNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      showAdminLink: true
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
  };

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
              <NavLink href="/" className="mr-4">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/kids/" className="mr-4">Kids</NavLink>
            </NavItem>

            {/* Only show Donors link if user is signed in */}
            {auth0Client.isAuthenticated() ? (
              <NavItem>
                <NavLink href={"/donors"} className="mr-4">Donors</NavLink>
              </NavItem>
            ) : null}

            {/* Only show Admin link if user is signed in */}
            {auth0Client.isAuthenticated()  && this.state.showAdminLink ? (
              <NavItem>
                <NavLink href="/admin" className="mr-4">Admin</NavLink>
              </NavItem>
            ) : null}

            {/* If user is not signed in, show Log in button and click to go to log in. If use is signed in, show dropdown menu with links to user profile and log out */}
            {!auth0Client.isAuthenticated() ? (
                <NavLink onClick={auth0Client.signIn}>Log In</NavLink>
              ) : (
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      User
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavLink href="/userprofile">
                        My Profile
                        </NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink onClick={() => { this.signOut() }}>
                          Log Out
                        </NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                )}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(MainNavbar);