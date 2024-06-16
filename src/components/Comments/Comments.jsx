import React from "react";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import viewsIcon from "../../assets/Icons/views.svg";
import CommentItem from "../Comment Item/CommentItem";
import { useState, useEffect } from 'react'
import axios from "axios";
import { API_URL } from "../../../utils";
import { API_KEY } from "../../../utils";

import'./Comments.scss';


function Comments() {

        const [comments, setComments] = useState([]);
      
    
        useEffect(() => {
          async function getComments() {
            try {
              const response = await axios.get(`${API_URL}/videos/84e96018-4022-434e-80bf-000ce4cd12b8/?api_key=${API_KEY}`);
              console.log(response.data.comments)
             
              setComments(response.data.comments)
            } catch (error) {
              console.log('API request error:\n', error)
            }
            
          }
          getComments()  ;
        }, []);
        
        if (!comments || comments.length === 0) {
          return (
            <p> Just a moment while we load the comment details....</p>
          );
        }
    
   
  

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
