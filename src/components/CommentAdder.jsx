import { useState } from "react";
import { postComment } from "../../api";
import { useParams } from "react-router-dom";

function CommentAdder({ setShowComments, setCurrentComments }) {
  const [newUsername, setNewUsername] = useState("grumpy19");
  const [userComment, setUserComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { review_id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsSubmitting(true);

    const commentToPost = {
      username: newUsername,
      body: userComment,
    };
    postComment(review_id, commentToPost)
      .then((response) => {
        setCurrentComments((originalComments) => {
          return [response.comment, ...originalComments];
        });
        setUserComment("");
      })
      .then(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (event) => {
    setUserComment(event.target.value);
  };

  return (
    <section>
      <h2>Comment Section</h2>
      <p>
        You are logged in as <strong>{newUsername}</strong>
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userComment"></label>
        <textarea
          onChange={handleChange}
          name="Comment"
          id="userComment"
          cols="50"
          rows="4"
          required value={userComment}
          placeholder="What are your thoughts?"
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
}

export default CommentAdder;
