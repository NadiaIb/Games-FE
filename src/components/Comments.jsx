import { useEffect, useState } from "react";
import { getComments } from "../../utils";

function Comments({ showComments, setShowComments, review_id }) {
  const [currentComments, setCurrentComments] = useState([]);

  useEffect(() => {
    getComments(review_id).then((comment) => {
      // console.log(comment.comments)
      setCurrentComments(comment);
    });
  },[]);

  return (
    <ul>
      {currentComments.map((comment) => {
        // console.log(comment)
        return (
          <li key={comment.comment_id}>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>{comment.votes}</p>
            <p>Posted at: {comment.created_at}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default Comments;
