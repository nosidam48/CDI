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
    }
  }

  // Function to check if user has admin privileges
  checkAdminStatus() {
    // Grab the user's email address from the jwt token
    let profile = auth0Client.getProfile();

    // Make call to the database to get user info
    API.getDonor({ email: profile.name })
      .then(response => {
        if (response.data.admin_status === true) {
          this.setState({ 
            admin: true,
           })
        } else {
          this.setState({ 
            admin: false,
          })
        }
      })
    }  

  async componentDidMount() {
    // I DON'T THINK I NEED THIS BECAUSE I WANT TO CHECK ADMIN STATUS NO MATTER WHAT
    // // Checks to see if login was successful (callback route was called). 
    // if (this.props.location.pathname === '/callback') {
    //   await auth0Client.silentAuth();
    //   this.checkAdminStatus();
    //   this.setState({ checkingSession: false });
    //   return;
    // }
    // If user didn't just log in, auth0 checks if already logged in 
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
        <Navbar admin={this.state.admin}/>
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


