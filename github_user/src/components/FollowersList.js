import React from "react";
import UserCard from "./UserCard";

export default function FollowersList({ followers }) {
  console.log("followers:", followers);
  return (
    <div>
      {/* {followers.map(follower => (
        <UserCard follower={follower} />
      ))} */}
    </div>
  );
}
