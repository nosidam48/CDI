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
import auth0Client from "./Auth";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    }
  }

  // Checks to see if login was successful. If so, calls Callback route 
  async componentDidMount() {
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
    this.setState({ checkingSession: false });
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
          <Route path="/donors/:id" component={Donors} checkingSession={this.state.checkingSession}/>
          <SecuredRoute path="/admin" component={Admin} checkingSession={this.state.checkingSession}/>
          <SecuredRoute path="/userprofile" component={Profile} checkingSession={this.state.checkingSession} />
          <Route exact path="/callback" component={Callback} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);


