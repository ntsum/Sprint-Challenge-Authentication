import React from "react";
import axios from "axios";
import styled from "styled-components";
import requiresAuth from "../Authentication/requiresAuth.js";

const List = styled.div`
  margin: 0 auto;
  color: indigo;
  font-weight: bold;
  line-height: 2;
`;

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <List>
        <h2>DAD JOKES!!!!!!!!!!!</h2>
        <ul>
          {this.state.jokes.map(user => (
            <h3 key={user.id}>{user.joke}</h3>
          ))}
        </ul>
      </List>
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
