import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar/>
        </div>
        <div className="bottom">
          <p className="info"> {props.info}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
