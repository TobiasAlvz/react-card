import React from "react";
import Card from "./Card";
import contacts from "./contacts";
import Avatar from "./Avatar";

import "./style.css";

function App() {
  return (
    <div>
      <h1 className="heading">Personagens</h1>
      <Avatar img="https://i1.sndcdn.com/artworks-C5gl8UDRFK7ydaFh-MkhgaA-t500x500.jpg" />
      <Card
        name={contacts[0].name}
        img={contacts[0].img}
        info={contacts[0].info}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].img}
        info={contacts[1].info}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].img}
        info={contacts[2].info}
      />
    </div>
  );
}

export default App;
