import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';

class App extends Component {
  constructor() {
    super();
    this.state = { todos: {} };
    
    this.handleNewTodoInput = this.handleNewTodoInput.bind(this);
  }

  createTodo(todoText) {
    //assign variable name to our url
    const fbURL = 'https://todowithparis.firebaseio.com/.json';
    // uses axios to make a post request to the Firebase db with the data
      axios.post(fbURL, {
          newText: todoText
      }).then(() => {
    //see if this promise gets executed
    console.log("POSTED");
  })//catch errors
  .catch((error) => {
    console.log(error);
  });
}  
  

  handleNewTodoInput(event) {
    if (event.charCode === 13) {
      this.createTodo(event.target.value);
      event.target.value = "";
    }
  }


  renderNewTodoBox() {
    return (
      <div className="new-todo-box pb-2">
        <input className="w-100" placeholder="What do you have to do?" onKeyPress={ this.handleNewTodoInput } />
      </div>
    );
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row pt-3">
          <div className="col-6 px-4">
            {this.renderNewTodoBox()}
          </div>
        </div>
      </div>
    );
  }
}

export default App;