import React from "react";
import { Route, withRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Donors from "./pages/Donors";
import Home from "./pages/Home";
import KidProfilePublic from "./pages/KidProfilePublic";
import Kids from "./pages/Kids";
import NoMatch from "./pages/NoMatch";
import Callback from "./Callback";
import SecuredRoute from "./SecuredRoute/SecuredRoute";
import auth0Client from "./Auth";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    }
  }

  async componentDidMount() {
    if (this.props.location.pathname === '/callback') {
      this.setState({checkingSession:false});
      return;
    }
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({checkingSession:false});
  }   

    render() {
      return (
          <div>
            <Navbar/>
              <Route exact path="/" component={Home} />
              <Route exact path="/kids" component={Kids} />
              <Route exact path="/kids/:id" component={KidProfilePublic} />
              <Route exact path="/donors/:id" component={Donors} />
              <SecuredRoute path="/admin" component={Admin} checkingSession={this.state.checkingSession} />
              <Route exact path="/callback" component={Callback} />
              <Route component={NoMatch} />
          </div>
      );
    }
  }

  export default withRouter(App);


