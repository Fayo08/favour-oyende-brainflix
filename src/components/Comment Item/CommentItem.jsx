import React from "react";
import "./CommentItem.scss";

function CommentItem(props) {
  const { name, comment, timestamp } = props;

  const newTimestamp = new Date(timestamp).toLocaleDateString();
  return (
    <>
      <main className="comment">
        <div className="comment__placeholder"> <div className="comment__placeholderImg"></div></div>
        <div className="comment__info">
          <div className="comment__info--details">
            <h3 className="comment__title"> {name} </h3>
            <p className="comment__content"> {comment} </p>
            
          </div>
          <p className="comment__date">{newTimestamp} </p>
        </div>
      </main>
    </>
  );
}

export default CommentItem;
