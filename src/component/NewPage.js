import React from "react";

function NewPage(props) {
  return (
    <div className="container">
      <img src={props.icons} alt="icon" />
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <button className="btnn">{props.btn}</button>
    </div>
  );
}

export default NewPage;
