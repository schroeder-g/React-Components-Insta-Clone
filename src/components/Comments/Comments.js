import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log("the Comments: ", comments)

  return (
    <div>
      {/* map through the comments data array and render a Comment for every comment piece of data */}
      {comments.map(comment =>{
        return <Comment
          key = {comment.id}
          comment = {comment}
            />
      })}
    </div>
  );
};

export default Comments;
