import React from "react";
import "./CommentItem.scss";

function CommentItem(props) {
  const { name, comment, timestamp } = props;

  const newTimestamp = new Date(timestamp).toLocaleDateString();
  return (
    <>
      <div className="comment">
        <div className="comment__placeholderImg"></div>
        <div className="comment__info">
          <div className="comment__info--details">
            <h3 className="comment__title"> {name} </h3>
            <p className="comment__date">{newTimestamp} </p>
          </div>
          <p className="comment__content"> {comment} </p>
        </div>
      </div>
    </>
  );
}

export default CommentItem;
