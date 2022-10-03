import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h1>My Contacts</h1>

      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.gmail}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      phone="3929492"
      gmail="jackb@gmail.com"
    />
  </div>,

  document.getElementById("root")
);
