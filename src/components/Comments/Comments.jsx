import React from "react";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import viewsIcon from "../../assets/Icons/views.svg";
import CommentItem from "../Comment Item/CommentItem";

import'./Comments.scss';


function Comments({ 
    comments, }) {

    
    
    // if (!commentsData) {
    //     return <p>Loading...</p>;
    //   }
      
  

  console.log({comments})

  return (
    <article className="articles">
      <img className="articles__avatar" src={avatar} alt="Avatar" />
      <div className="articles__comment">
        <div className="articles__separate">
          <h3 className="articles__title">JOIN THE CONVERSATION</h3>

          <textarea className="articles__input"></textarea>
        </div>
        <button className="articles__button">
          <span>
            {" "}
            <img src={viewsIcon} alt="Views Icon" />{" "}
          </span>
          COMMENT
        </button>
      </div>



      {comments && comments.length > 0 ? (
  comments.map((comment) => {
    return <CommentItem key={comment.id} {...comment} />;
  })
) : (
  <p>No comments available.</p>
)}
     
    </article>
  );
}

export default Comments;
