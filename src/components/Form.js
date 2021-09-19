import React from 'react';
import './Form.css'

const Form = (props) => {
  return (  
    <form>
      {props.isEditing ? <input maxLength="40" onChange={props.handleInputEdit} value={props.nowEditing} type="text" /> : <input placeholder="Wpisz swoje zadanie" maxLength="40" onChange={props.handleInput} value={props.value} type="text" />}
      {props.isEditing ? <button onClick={props.edit}>UPDATE TASK</button> : <button onClick={props.click}>NEW TASK</button>}
    </form>
  );
}
 
export default Form;