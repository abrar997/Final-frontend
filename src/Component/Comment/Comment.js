import React, { Component } from "react";
import Create from "./CommentList/Create";
import Single from "./CommentList/Single";
import img1 from './commentimg/click.png'

import './Comment.css'
import Dataconstant from "./CommentList/Dataconstant";
class Comment extends Component {
  state = {
    newTask: "", //add new comment
    // default  comment in page data
    todos: [
      // { text: "learn ReactJs" },
      // { text: "learn NodeJS" },
      // { text: "learn VueJs" },
      // { text: "learn AngularJS" },
    ],
  };

  //   to get all
  completeTask = (index) => {
    // فائدة 3 نقاط حتى لمن اضغط هلى  x
    // لمن اوخرة راح يحذفهم كلهم يحذف واحد واحد
    const todos = [...this.state.todos];
    // delete this by click
    todos.splice(index, 1);
    // new
    this.setState({
      todos,
    });
  };
  // get value from input bu onChenge
  updateNewTask = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };
  // add by click button
  addTask = () => {
    const todos = [...this.state.todos];
    todos.push({
      text: this.state.newTask,
    });
    this.setState({
      todos,
      newTask: "",
    });
  };

  render() {
    return (
      <div className="comment">
        <div className="container">
          <h1>Reviews </h1>
          <h3>add your reviews and encourage us to imporve our services </h3>
          <Dataconstant />
          <div className="d-flex">
            <div>
              {this.state.todos.map((todo, index) => (
                // trans data to other component by props
                //shape of single component  after add
                <Single
                  todo={todo}
                  completeTask={() => this.completeTask(index)} //callback function with one parameter
                  key={index}
                />
              ))}
              {/* steps of  add component  */}
              <div>
                {" "}
                <Create
                  value={this.state.newTask}
                  onChange={this.updateNewTask}
                  addTask={this.addTask}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Comment;




