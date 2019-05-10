import React from "react";
import { Route, NavLink, withRouter } from "react-router-dom";

import "./App.css";
import Login from "./Authentication/Login.js";
import Register from "./Authentication/Register.js";
import Jokes from "./Jokes/Jokes.js";

function App(props) {
  function logout() {
    localStorage.removeItem("jwt");
    props.history.push("/login");
  }

  return (
    <>
      <header>
        <NavLink to="/login">Login</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/register">Register</NavLink>
        &nbsp;|&nbsp;
        <NavLink to="/jokes">DAD JOKES</NavLink>
        &nbsp;|&nbsp;
        <button type="button" onClick={logout}>
          Logout
        </button>
      </header>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/jokes" component={Jokes} />
      </main>
    </>
  );
}

export default withRouter(App);
