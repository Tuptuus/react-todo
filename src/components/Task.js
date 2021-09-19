import React from "react";
import "./Task.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faCheck } from "@fortawesome/free-solid-svg-icons";

const Trash = <FontAwesomeIcon icon={faTrash} />;
const Edit = <FontAwesomeIcon icon={faEdit} />;
const Check = <FontAwesomeIcon icon={faCheck} />;

const Task = (props) => {
  const element = props.tasks.map((item) => (
    <div
      className={
        props.isChecked && props.nowChecked === item.id ? "task done" : "task"
      }
      key={item.id}
    >
      <div className="content">{item.task}</div>
      <div className="buttons">
        <div onClick={props.handleButtons.bind(this, "delete", item.id)}>
          {Trash}
        </div>
        <div onClick={props.handleButtons.bind(this, "edit", item.id)}>
          {Edit}
        </div>
        <div onClick={props.handleButtons.bind(this, "check", item.id)}>
          {Check}
        </div>
      </div>
    </div>
  ));
  return <>{element}</>;
};

export default Task;
