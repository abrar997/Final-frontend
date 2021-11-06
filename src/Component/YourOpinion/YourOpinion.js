import React, { Component } from 'react'
import CommentBox from './CommentBox'
export class YourOpinion extends Component {
  constructor() {
    super();
    this.state = {
      commentValue: "",
      commentLine: [{ commentId: "", text: "" }],
    };
  }
  handleCommentValue = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <CommentBox
          commentValue={this.state.commentValue}
          handleCommentValue={this.handleCommentValue}
          enterCommentLine={this.enterCommentLine}
          submitCommentLine={this.submitCommentLine}
        />
      </div>
    );
  }
}

export default YourOpinion
