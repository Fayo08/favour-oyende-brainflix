import React from 'react';

function CommentItem(props) {
    const {name, comment, timestamp} = props
    return (
        <div className='comment'>
            <div className='comment__placeholderImg'  ></div>
            <h3> {name} </h3>
            <p>{timestamp} </p>
            <p> {comment} </p>
        </div>
    );
}

export default CommentItem;