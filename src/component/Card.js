import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.complete ? "green" : "yellow",
        display: "flex",
        borderWidth: "2px"
      }}
    >
      <h1
        style={{
          borderColor: "black",
          padding: "5px",
          width: "100px"
        }}
      >
        {props.name}
      </h1>
      <button
        onClick={() => props.handlecomplete(props.id)}
        style={{ backgroundColor: "ButtonHighlight" }}
      >
        Complete
      </button>
      <button
        onClick={() => props.handledelete(props.id)}
        style={{ backgroundColor: "blue", width: "40px" }}
      >
        X
      </button>
    </div>
  );
};

export default Card;
