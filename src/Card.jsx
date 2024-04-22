import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div>
      <div className="card">
      <p className="id">{props.id}</p>
        <div className="top">
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Detail info={props.info} />
        </div>
      </div>
    </div>
  );
}

export default Card;
