import { useEffect, useState } from "react";
import { getComments } from "../../utils";

function Comments({ review_id }) {
  const [showComments, setShowComments] = useState(false);
  const [currentComments, setCurrentComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(review_id)
    .then((comment) => {
      setCurrentComments(comment);
      setIsLoading(false)
    })
    .catch((err) => {
        //err handling
      });
  }, [review_id]);

  const handleClick = () => {
    setShowComments(!showComments);
  };

  let buttonText;
  if (!showComments) {
    if (currentComments.length === 1) {
      buttonText = `Show ${currentComments.length} comment`;
    }
    if (currentComments.length > 1) {
      buttonText = `Show ${currentComments.length} comments`;
    } else {
      buttonText = "Be the first to add a comment";
    }
  } else {
    buttonText = "Hide comments";
  }

  if(isLoading){
   return <h2> Comments are loading </h2>
  }
  return (
    <section>
      {showComments && (
        <ul>
          {currentComments.map((comment) => {
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
      )}
      <button onClick={handleClick}>{buttonText}</button>
    </section>
  );
}

export default Comments;
