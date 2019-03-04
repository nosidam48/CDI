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
import API from "./utils/API";
import auth0Client from "./Auth";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
      admin: false,
      authenticated: false,
      userName: "User"
    }
  }

  // Function to check if user has admin privileges and to store user name
  checkAdminStatus() {
    // Grab the user's email address from the jwt token
    let profile = auth0Client.getProfile();

    // Make call to the database to get user info
    API.getDonor({ email: profile.name })
      .then(response => {
        // Set userName variable if user has a profile and a first name. 
        let userName = "User";
        if (response.data) {
          if (response.data.first_name) {
            userName = response.data.first_name
          }
          // Set admin status based on db info
          let admin = false;
          if (response.data.admin_status === true) {
            admin = true;
          }
          // Set state with new info
          this.setState({
            userName: userName,
            admin: admin,
            authenticated: true
          }) 

        // If no profile exists yet, set state with values
        } else {
          this.setState({ 
            userName: "User",
            admin: false,
            authenticated: true,
          })
        }
      })
    }  

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

  // Renders routes
  render() {
    return (
      <div>
        <Navbar 
          userName={this.state.userName}
          admin={this.state.admin}
          authenticated={this.state.authenticated}
          checkingSession={this.state.checkingSession}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/kids" component={Kids} />
          <Route exact path="/kids/:id" component={KidProfilePublic} />
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
            admin={this.state.admin}/>
          <Route exact path="/callback" component={Callback} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);


