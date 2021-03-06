import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Donors from "./pages/Donors";
import Home from "./pages/Home";
import KidProfilePublic from "./pages/KidProfilePublic";
import Kids from "./pages/Kids";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import Callback from "./pages/Callback";
import SecuredRoute from "./SecuredRoute/SecuredRoute";
import SecuredAdminRoute from "./SecuredAdminRoute/SecuredAdminRoute";
import Footer from "./components/Footer";
import API from "./utils/API";
import auth0Client from "./Auth";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
      admin: false,
      authenticated: false,
      userName: "User",
      email: ""
    }
  }

  // Checks to see if the user is currently logged in
  async componentWillMount() {
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
      this.checkAdminStatus();

    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({ checkingSession: false });
  }

  // Function to check if user has admin privileges and to store user name
  checkAdminStatus() {
    // Grab the user's email address from the jwt token
    let profile = auth0Client.getProfile();

    // Make call to the database to get user info
    API.getDonor({ email: profile.name })
      .then(response => {
        // Set userName and email variables if they exist in user profile. 
        let userName = "User";
        let email = "";
        if (response.data) {
          if (response.data.first_name) {
            userName = response.data.first_name
          }
          if (response.data.email) {
            email = response.data.email
          }

          // Set admin status based on db info
          let admin = false;
          if (response.data.admin_status === true) {
            admin = true;
          }
          // Set state with new info
          this.setState({
            userName: userName,
            email: email,
            admin: admin,
            authenticated: true
          })

          // If no profile exists yet, set state with values
        } else {
          this.setState({
            userName: "User",
            email: "",
            admin: false,
            authenticated: true,
          })
        }
      })
  }

  // Renders routes
  render() {
    return (
      <div className="site">
        <div className="site-content">
          <Navbar
            userName={this.state.userName}
            admin={this.state.admin}
            authenticated={this.state.authenticated}
            checkingSession={this.state.checkingSession}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/kids"
              render={(props) => <Kids {...props}
                email={this.state.email} />}
            />
            <Route exact path="/kids/:id"
              render={(props) => <KidProfilePublic {...props}
                email={this.state.email} />}
            />
            <SecuredRoute
              path="/donors"
              component={Donors}
              checkingSession={this.state.checkingSession} />
            <SecuredRoute
              path="/userprofile"
              component={Profile}
              checkingSession={this.state.checkingSession} />
            <SecuredAdminRoute
              path="/admin"
              component={Admin}
              checkingSession={this.state.checkingSession}
              admin={this.state.admin} />
            <Route exact path="/callback" component={Callback} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      <Footer />
      </div>
    );
  }
}

export default withRouter(App);


