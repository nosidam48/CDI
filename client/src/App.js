import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/kids" component={Kids} />
          <Route exact path="/kids/:id" component={KidProfilePublic} />
          <Route exact path="/donors" component={Donors} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


