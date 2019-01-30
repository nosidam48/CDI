import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import Donors from "./pages/Donors";
import Home from "./pages/Home";
import KidProfilePublic from "./pages/KidProfilePublic";
import Kids from "./pages/Kids";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoMatch from "./pages/NoMatch";
import axios from "axios";

let x = 2

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    x > 1
      ? <Component {...props} />
      : <Redirect to="/login" />
  )} />
)

class App extends React.Component {
  constructor() {
    super()
    // Set the state to default (no user)
    this.state = {
      loggedIn: false,
      email: null,
      id: ""
    }
    // Bind our functions to this component 
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  //On page load run the getUser function
  componentDidMount() {
    this.getUser()
    // console.log("User info from req.user: " + req.user)
    }

    // an updateUser function to pass to the login page
    updateUser = (userObject) => {
      this.setState(userObject)
      console.log(this.state);
    }

    // // A function to check for a user
    getUser = () => {
      console.log("getUser called");
      axios.get('/user/').then(response => {
        console.log('Get user response: ')
        console.log(response.data)
        //if there is a user
        if (response.data.user) {
          console.log('Get User: There is a user saved in the server session: ')
          //set the state to loggedIn: true, and set the user email
          this.setState({
            loggedIn: true,
            email: response.data.user.email,
            id: response.data.user.id
          })
          console.log(this.state);
        } else {
          console.log('Get user: no user');
          //Otherwise, set state to default (no user)
          this.setState({
            loggedIn: false,
            email: null
          })
        }
      })
    }

    render() {
      return (
        <Router>
          <div>
            <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} userID={this.state.id} />
            {this.state.loggedIn &&
              <p>Join the party, {this.state.email}!</p>
            }
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/kids" component={Kids} />
              <Route exact path="/kids/:id" component={KidProfilePublic} />
              <Route exact path="/donors/:id" component={Donors} />
              <PrivateRoute exact path="/admin" component={Admin} />
              <Route exact path="/login" render={() =>
                <Login
                  updateUser={this.updateUser}
                />} />
              <Route exact path="/signup" component={Signup} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );
    }
  }

  export default App;


