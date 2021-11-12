// import React, { Component } from "react";
// import Create from "./CommentList/Create";
// import Single from "./CommentList/Single";
// import './Comment.css'
// class Comment extends Component {
    
//   state = {
//     newTask: "", //add new comment 
//     // default  comment in page 
//     todos: [
//       { text: "learn ReactJs" },
//       { text: "learn NodeJS" },
//       { text: "learn VueJs" },
//       { text: "learn AngularJS" }
//     ],
//   };

// //   to get all 
//   completeTask = (index) => {
//     const todos = [...this.state.todos];
// // delete this by click 
//     todos.splice(index, 1);
// // new
//     this.setState({
//       todos,
//     });
//   };
// // get value from input bu onChenge
//   updateNewTask = (event) => {
//     this.setState({
//       newTask: event.target.value,
//     });
//   };
// // add by click button 
//   addTask = () => {
//     const todos = [...this.state.todos];
//     todos.push({  
//       text: this.state.newTask,
//     });
//     this.setState({
//       todos,
//       newTask: "",
//     });
//   };

//   render() {
//     return (
//       <div className="comment">
//         <div className="container">
//         {this.state.todos.map((todo, index) => (
//             // trans data to other component by props 
//             //shape of single component  after add 
//           <Single
//             todo={todo}
//             completeTask={() => this.completeTask(index)} //callback function with one parameter
//             key={index}
//           />
//         ))}
// {/* steps of  add component  */}
//         <Create
//           value={this.state.newTask}
//           onChange={this.updateNewTask}
//           addTask={this.addTask}
//         />
//       </div></div>
//     );
//   }
// }

// export default Comment;
// import React, { Component } from "react";
// import "./Comment.css";

// class Comment extends Component {
//   constructor(props) {
//     super(props); // makes this a React component
//     this.state = {
//       text: "",
//       addedPhoto: false,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.toggleAddPhoto = this.toggleAddPhoto.bind(this);
//   }

//   handleChange(event) {
//     this.setState({
//       text: event.target.value,
//     });
//   }

//   toggleAddPhoto() {
//     this.setState({
//       addedPhoto: !this.state.addedPhoto,
//     });
//   }

//   render() {
//     const addedPhotoLength =
//       this.state.text.length + (this.state.addedPhoto ? 20 : 0);
//     return (
//       <div className="well clearfix">
//         <textarea
//           onChange={this.handleChange}
//           className="form-control"
//         ></textarea>
//         <br />
//         <span>{300 - addedPhotoLength} remaining characters.</span>
//         <button
//           className="btn btn-primary pull-right"
//           onClick={this.toggleAddPhoto}
//         >
//           {this.state.addedPhoto ? "Added Photo" : "Add Photo"}
//         </button>
//         <button
//           disabled={addedPhotoLength === 0 || addedPhotoLength > 300}
//           className="btn btn-primary pull-right"
//         >
//           Comment
//         </button>
//       </div>
//     );
//   }
// }

// export default Comment;



