import React from "react";
import "./Title.css";
function Title(props) {
  return (
    <>
      <div className="title">
        <p>{props.text}</p>
        <h2>{props.content}</h2>
      </div>
    </>
  );
}

export default Title;
