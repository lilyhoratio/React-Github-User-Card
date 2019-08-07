import React, { Component } from "react";
// import axios from "axios";
import UserCard from "./components/UserCard";
import FollowersList from "./components/FollowersList";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  //lifecycle methods
  componentDidMount() {
    // v1 - using axios
    // axios.get("https://api.github.com/users/lilyhoratio").then(res => {
    //   this.setState({ user: res.data });
    // });
    // axios
    // .get("https://api.github.com/users/lilyhoratio/followers")
    // .then(response => {
    //   this.setState({ followers: response.data })
    // });
    //v2 - using native fetch
  }

  render() {
    return (
      <div>
        <UserCard user={this.state.user} />
        <FollowersList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
