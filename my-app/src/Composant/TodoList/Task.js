import React, { useState } from "react";
import "./Task.css";

export default function Task(props) {
  return (
    <>
      <li className="li-list-new">
        {props.myTask}
        <button className="btn-list-new">age : {props.age} </button>
        <button
          onClick={() => props.delFunction(props.id)}
          className="btn-list-new"
        >
          Valider
        </button>
      </li>
    </>
  );
}
