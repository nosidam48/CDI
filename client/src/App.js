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

  async componentDidMount() {
    // Checks to see if login was successful. If so, calls Callback route 
    if (this.props.location.pathname === '/callback') {
      this.setState({ checkingSession: false });
      return;
    }
    // If user didn't just log in, auth0 checks if already logged in 
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }

    // Check to see if user has admin privileges
    let profile = auth0Client.getProfile();
    // Get user info from the db to determine whether user had admin privileges and set state
    API.getDonor({ email: profile.name })
      .then(response => {
        if (response.data.admin_status === true) {
          this.setState({ 
            admin: true,
            checkingSession: false
           })
        } else {
          this.setState({ 
            admin: false,
            checkingSession: false 
          })
        }
        console.log(this.state);
      })
  }

  // Renders routes
  render() {
    return (
      <div>
        <Navbar />
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


