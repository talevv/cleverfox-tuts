import React from 'react';

export default class NewComment extends React.Component {

  render() {
    return (
      <div>
        <input type="text" className="comment-input" placeholder="Write comment"/><button className="comment-button" onClick={this.clickFunction.bind(this)}>Comment</button>
      </div>
    )
  }
  clickFunction(){
    console.log(this.props.id);
  }
}