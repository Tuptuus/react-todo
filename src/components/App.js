import React, { Component } from "react";
import "./App.css";
import Task from "./Task";
import Form from "./Form";

export default class App extends Component {
  state = {
    inputValue: "",
    isEditing: false,
    nowEditing: null,
    nowEditingIndex: null,
    isChecked: false,
    nowChecked: null,
    disableDelete: false,
    tasks: [],
  };

  handleButtonAddTask = (e) => {
    e.preventDefault();
    if (this.state.tasks.length === 0 && this.state.inputValue !== "") {
      this.setState((prevState) => ({
        inputValue: "",
        tasks: prevState.tasks.concat({
          id: 1,
          task: this.state.inputValue,
        }),
      }));
    } else if (this.state.inputValue !== "") {
      const last = this.state.tasks[this.state.tasks.length - 1];
      this.setState((prevState) => ({
        inputValue: "",
        tasks: prevState.tasks.concat({
          id: last.id + 1,
          task: this.state.inputValue,
        }),
      }));
    } else {
      alert("wpisz wartość");
    }
  };

  handleEditTask = (e) => {
    e.preventDefault();
    const tasks = [...this.state.tasks];
    tasks[this.state.nowEditingIndex].task = this.state.nowEditing;
    this.setState((prevState) => ({
      nowEditing: "",
      isEditing: false,
      nowEditingIndex: null,
      disableDelete: false,
      tasks: tasks,
    }));
  };

  handleInputEditValue = (e) => {
    this.setState({
      nowEditing: e.target.value,
    });
  };

  handleInputValue = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleButtons = (type, id) => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((item) => item.id === id);
    if (type === "delete") {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks,
      });
    } else if (type === "edit") {
      this.setState({
        nowEditing: tasks[index].task,
        isEditing: true,
        nowEditingIndex: index,
        disableDelete: true,
      });
    } else if (type === "check") {
      this.setState({
        nowChecked: id,
        isChecked: !this.state.isChecked,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="add">
          <Form
            ref={this.inputRef}
            isEditing={this.state.isEditing}
            nowEditing={this.state.nowEditing}
            handleInputEdit={this.handleInputEditValue}
            handleInput={this.handleInputValue}
            value={this.state.inputValue}
            click={this.handleButtonAddTask}
            edit={this.handleEditTask}
          />
        </div>
        <div className="tasksContainer">
          <Task
            disable={this.state.disableDelete}
            nowChecked={this.state.nowChecked}
            isChecked={this.state.isChecked}
            handleButtons={this.handleButtons}
            tasks={this.state.tasks}
          />
        </div>
      </div>
    );
  }
}
