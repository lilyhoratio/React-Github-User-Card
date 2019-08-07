import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function UserCard({ user }) {
  console.log("user props:", user);

  return (
    <Card>
      <Image src={user.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          <span className="location">Lives in {user.location}</span>
        </Card.Meta>
        <Card.Description>{user.bio}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          {user.followers} Followers
        </a>
      </Card.Content>
    </Card>
  );
}

export default UserCard;
