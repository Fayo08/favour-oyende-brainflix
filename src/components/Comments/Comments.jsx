
import React from "react";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import viewsIcon from "../../assets/Icons/views.svg";
import commentsIcon from "../../assets/Icons/add_comment.svg";
import CommentItem from "../Comment Item/CommentItem";


import "./Comments.scss";

function Comments({mainVideo}) {
  
  const {comments} = mainVideo

  if (!comments || comments.length === 0) {
    return <p> Just a moment while we load the comment details....</p>;
  }

  return (
    <article className="articles">
      <div className="articles__content">
        <img className="articles__avatar" src={avatar} alt="Avatar" />
        <form className="articles__separate">
          <div className="articles__form">
            <label htmlFor="commentArea" className="articles__title">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="articles__input"
              placeholder="Add a new comment"
            ></textarea>
          </div>
          <button className="articles__button">
            <span className="articles__icon">
         
              <img src={commentsIcon} alt="Views Icon" />
            </span>
            COMMENT
          </button>
        </form>
      </div>

      <div className="articles__comments">
        {comments && comments.length > 0 ? (
          comments.map((comment) => {
            return <CommentItem key={comment.id} {...comment} />;
          })
        ) : (
          <p>No comments available.</p>
        )}
      </div>
    </article>
  );

}

export default Comments;