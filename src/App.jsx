import React from "react";
import Card from "./Card";
import contacts from "./contacts";
import Avatar from "./Avatar";
import "./style.css";

function creatCard(contact) {
  return <Card id={contact.id} name={contact.name} img={contact.img} info={contact.info} />;
}

function App() {
  return (
    <div>
      <h1 className="heading">Personagens</h1>
      <Avatar img="https://i1.sndcdn.com/artworks-C5gl8UDRFK7ydaFh-MkhgaA-t500x500.jpg" />
      {contacts.map(creatCard)}
    </div>
  );
}

export default App;
