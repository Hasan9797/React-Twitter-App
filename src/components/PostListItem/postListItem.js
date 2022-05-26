import React from "react";
import "./postListItem.css";

export default function PostListItem({ label, deletedPost, important, like, onImportant,onLiked}){

    let classNames = "app-list-item d-flex justify-content-between";
    if (important) {
      classNames += " important";
    }

    if(like){
      classNames += ' like'
    }

    return (
      <li className={classNames}>
        <span className="app-list-item-label" onClick={onLiked}>{label}</span>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" className="btn-star btn-sm" onClick={onImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={deletedPost}>
            <i className="fa fa-trash"></i>
          </button>
          <i className="fa fa-heart"></i>
        </div>
      </li>
    );
}
