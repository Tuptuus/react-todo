import React, { useRef } from "react";
import "./Form.css";

const Form = (props) => {
  // const handleFocus = (e) => {
  //   e.preventDefault();
  //   inputRef.current.focus();
  // };
  const inputRef = useRef();
  return (
    <form>
      {props.isEditing ? (
        <input
          maxLength="40"
          onChange={props.handleInputEdit}
          value={props.nowEditing}
          type="text"
        />
      ) : (
        <input
          ref={inputRef}
          placeholder="Wpisz swoje zadanie"
          maxLength="40"
          onChange={props.handleInput}
          value={props.value}
          type="text"
        />
      )}
      {props.isEditing ? (
        <button onClick={props.edit}>UPDATE TASK</button>
      ) : (
        <button onClick={props.click}>NEW TASK</button>
      )}
      {/* <button onClick={handleFocus}>Focus</button> */}
    </form>
  );
};

export default Form;
