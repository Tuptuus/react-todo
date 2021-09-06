import React, { Component } from 'react'
import './App.css'
import Task from './Task'
import Form from './Form'

export default class App extends Component {
  state = {
    inputValue: "",
    isEditing: false,
    nowEditing: null,
    tasks:[
      {
        id: 1,
        task: "siemano"
      }
    ]
  }

  handleButtonAddTask = (e) =>{
    e.preventDefault()
    if(this.state.tasks.length === 0 && this.state.inputValue !== "")
    {
      this.setState(prevState=>({
        inputValue: "",
        tasks: prevState.tasks.concat({
          id: 1,
          task: this.state.inputValue
        })
      }))
    }else if(this.state.inputValue !== ""){
      const last = this.state.tasks[this.state.tasks.length-1]
      this.setState(prevState=>({
        inputValue: "",
        tasks: prevState.tasks.concat({
          id: last.id+1,
          task: this.state.inputValue
        })
      }))
    }else{
      alert("wpisz wartość")
    }
  }

  handleInputValue = (e) =>{
    this.setState({
      inputValue: e.target.value
    })
  }

  handleButtons = (type, id) =>{
    const tasks = [...this.state.tasks]
    const index = tasks.findIndex(item=>item.id === id)
    if(type === "delete"){
      tasks.splice(index,1)
      this.setState({
        tasks: tasks
      })
    }else if(type === "edit"){
      this.setState({
        nowEditing: tasks[index].task,
        isEditing: true,
      })
    }else if(type === "check"){
      this.setState({
        nowChecked: id,
      })
    }
  }
  render() {
    return (
      <div className="App">
        <div className="add">
          <Form
            isEditing={this.state.isEditing}
            nowEditing={this.state.nowEditing}
            handleInput={this.handleInputValue} 
            value={this.state.inputValue} 
            click={this.handleButtonAddTask}
          />
        </div>
        <div className="tasksContainer">
          <Task 
            nowChecked={this.state.nowChecked} 
            handleButtons={this.handleButtons} 
            tasks={this.state.tasks}
          />
        </div>
      </div>
    )
  }
}
