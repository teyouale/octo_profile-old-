import React from "react";
import { Row, Container } from "react-bootstrap";
import Charts from "./Charts";
import "../userData.css";
const UserData = ({ userData }) => (
  <Container>
    <Row className="row">
      <img className="avater" src={userData.avatar_url} alt="info" />
      <h3>{userData.login}</h3>
      <h4>{userData.bio}</h4>
      <div className="info">
        <span className="info_item">{userData.location}</span>
        <span className="info_item">
          Joined{" "}
          {new Date(userData.created_at).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
      </div>
      <div className="stats">
        <div className="stats_infos">
          <span className="num">{userData.public_repos}</span>
          <span className="num-label">Repositories</span>
        </div>
        <div className="stats_infos">
          <span className="num">{userData.followers}</span>
          <span className="num-label">FOLLOWERS</span>
        </div>
        <div className="stats_infos">
          <span className="num">{userData.following}</span>
          <span className="num-label">FOLLOWING</span>
        </div>
      </div>
    </Row>
    <Charts />
  </Container>
);

export default UserData;
