import "./postAddFrom.css";
import React from "react";

export default class PostAddFrom extends React.Component {
  state = {
    text: "",
  };

  addPost = (e) => {
      this.setState({text: e.target.value})
  };

  onSubmit = (e) => {
      e.preventDefault();
      this.props.postsItem(this.state.text);
      this.setState({text: ''})
  }

  render() {

    return (
      <form className="bottom-panel d-flex" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What are you thinking avout?"
          className="form-control new-post-label"
          onChange={this.addPost}
          value={this.state.text}
        />
        <button
          type="submit"
          className="btn btn-outline-secondary"
        >
          Add Post
        </button>
      </form>
    );
  }
}
