import React from "react";

export default class PostListFilter extends React.Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "like", label: "Liked" },
  ];

  render() {
    const Button = this.buttons.map(({ name, label }) => {
      const active = (this.props.filter === name);
      const classNaaa = active ? "btn-info" : "btn-outline-secondary";

      return (
        <button
          key={name}
          className={`btn ${classNaaa}`}
          onClick={() => this.props.onUpdatefilter(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group">{Button}</div>;
  }
}
