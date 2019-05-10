import React from "react";
import axios from "axios";

import requiresAuth from "../Authentication/requiresAuth.js";

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <>
        <h2>DAD JOKES!!!!!!!!!!!</h2>
        <ul>
          {this.state.jokes.map(user => (
            <li key={user.id}>{user.joke}</li>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    const endpoint = "http://localhost:3300/api/jokes";
    axios
      .get(endpoint)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(err => console.error(err));
  }
}

export default requiresAuth(Jokes);
