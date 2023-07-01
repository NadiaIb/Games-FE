import { useEffect, useState } from "react";
import { getComments, deleteComment } from "../../api";
import CommentAdder from "./CommentAdder";

function Comments({
  review_id,
  userId
}) {
  const [showComments, setShowComments] = useState(false);
  const [currentComments, setCurrentComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(review_id)
      .then((comment) => {
        setCurrentComments(comment);
        setIsLoading(false);
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

  
  const handleDeleteComment = (comment_id) => {
    setCurrentComments((comments) => {
      return comments.filter((comment) => {
        return comment.comment_id !== comment_id;
      });
    });
    deleteComment(comment_id);
  };


  if (isLoading) {
    return <h2> Comments are loading </h2>;
  } else {
    return (
      <section>
        <CommentAdder
          setShowComments={setShowComments}
          setCurrentComments={setCurrentComments}
        />
        {showComments && (
          <ul>
            {currentComments.map((comment) => {
              const date = new Date(comment.created_at);
              const formattedDate = date.toLocaleString("en-GB");
              const incorrectUser = comment.author !== userId;

              return (
                <li key={comment.comment_id} className="commentsList">
                  <p>{comment.author}</p>
                  <p>{comment.body}</p>
                  <p>{comment.votes}</p>
                  <p>Posted at: {formattedDate}</p>
                  <button
                    value={comment.comment_id}
                    onClick={()=>{handleDeleteComment(comment.comment_id)}}
                    disabled={incorrectUser}
                  >
                    Delete Comment
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        <button onClick={handleClick}>{buttonText}</button>
      </section>
    );
  }
}

export default Comments;
