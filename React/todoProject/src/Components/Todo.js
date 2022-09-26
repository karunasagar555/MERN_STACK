import React, { Component } from 'react'

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 1, task: "Revise JS" },
        { id: 2, task: "Study DSA Level-1" },
      ],
      curTask: "",
    };
  }

  handleChange = (e) => {
    //console.log(e.target.value);
    this.setState({
      curTask: e.target.value,
    });
  }

  handleSubmit = () => {
    this.setState({
      tasks: [...this.state.tasks, { task: this.state.curTask, id: this.state.tasks.length + 1 }]
    });
  }


  render() {
    return ( // JSX STARTS 
      <div>
        <input type="text" value={this.state.curTask} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
        { // we have to use the curly braces again inside here, if we wanna write JS 
          this.state.tasks.map(function (taskobj) { // MAP acts like a loop, it will loop over all the objects.
            return (
              <li key={taskobj.id}>
                <p>{taskobj.task}</p>
                <button>Delete</button>
              </li>
            );
          })
        }
      </div>
    )
  }
}


