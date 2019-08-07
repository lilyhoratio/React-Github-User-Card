import React, { Component } from "react";
// import axios from "axios";
import UserCard from "./components/UserCard";
import FollowersList from "./components/FollowersList";
import 'semantic-ui-css/semantic.min.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: [],
      githubUser: "lilyhoratio"
    };
  }

  componentDidMount() {
    // v1 - using axios
    // axios.get("https://api.github.com/users/lilyhoratio").then(response => {
    //   this.setState({ user: response.data });
    // });
    // axios
    //   .get("https://api.github.com/users/lilyhoratio/followers")
    //   .then(response => {
    //     this.setState({ followers: response.data });
    //   });
    // console.log(this.state.user);
    //v2 - using native fetch
    fetch(`https://api.github.com/users/lilyhoratio`)
      .then(response => response.json())
      .then(userInfo => this.setState({ user: userInfo }))
      .catch(err => console.log(err));
    fetch(`https://api.github.com/users/lilyhoratio/followers`)
      .then(response => response.json())
      .then(followersInfo => this.setState({ followers: followersInfo }))
      .catch(err => console.log(err));
    console.log("state.user: ", this.state.user);
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
