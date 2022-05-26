import "./searchPanel.css";
import React from "react";

export default class SearchPanel extends React.Component {

    state = {
        term: ''
    }

    onUpdateSearch = (e) => {
        this.setState({term: e.target.value})
        this.props.onUpdateSearch(this.state.term)
    }

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Search by posts"
        onChange={this.onUpdateSearch}
        value={this.state.term}
      />
    );
  }
}
