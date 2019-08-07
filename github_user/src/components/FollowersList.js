import React from "react";
import UserCard from "./UserCard";

export default function FollowersList({ followers }) {
  console.log("followers:", followers);
  return (
    <div className="followers">
      {followers.map(follower => (
        <li>{follower.login}</li>
      ))}
    </div>
  );
}
