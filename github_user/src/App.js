import React, { Component } from "react";
// import axios from "axios";
import UserCard from "./components/UserCard";
import FollowersList from "./components/FollowersList";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      githubUser: "lilyhoratio"
    };
  }

  //lifecycle methods
  componentDidMount() {
    // v1 - using axios
    // axios.get("https://api.github.com/users/lilyhoratio").then(response => {
    //   this.setState({ user: response.data });
    // });
    // axios
    // .get("https://api.github.com/users/lilyhoratio/followers")
    // .then(response => {
    //   this.setState({ followers: response.data })
    // });
    //v2 - using native fetch
    fetch(`https://api.github.com/users/${this.state.githubUser}`)
      .then(response => response.json())
      .then(userInfo => this.setState({ user: userInfo }))
      .catch(err => console.log(err));
    console.log("state.user: ", this.state.user);

    fetch(`https://api.github.com/users/${this.state.githubUser}/followers`)
      .then(response => response.json())
      // .then(data => console.log(data));
      .then(followersInfo => this.setState({ followers: followersInfo }))
      .catch(err => console.log(err));
    console.log("state.followers: ", this.state.followers);
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
