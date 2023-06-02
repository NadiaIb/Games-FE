import { useEffect, useState } from "react";
import { postComment } from "../../api";
import { useParams } from "react-router-dom";

function CommentAdder(
  // showComments,
  setShowComments,
  setCurrentComments,
  // currentComments,
  // review_id
) {
  const [newUsername, setNewUsername] = useState("grumpy19");
  const [newUserComment, setUserComment] = useState("")
  const { review_id } = useParams();
  

  const handleSubmit = (event) => {
    event.preventDefault()
    // setShowComments(true);
    const commentToPost= {
      username: newUsername,
      body: newUserComment
    }
    postComment(review_id, commentToPost)
    .then((response)=>{
      // console.log(response)
      // return response
    })
  }
  const handleChange =(event)=>{
    // console.log(event.target.value)
    setUserComment(event.target.value)
  }

  //resets once submitted
  //cant submit 2x- disable
  //feedback if posting offline
  //validation
  
  return ( 
    <section>
      <h2>Comment Section</h2>
      <p>You are logged in as <strong>{newUsername}</strong></p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userComment"></label>
        <textarea onChange={handleChange} name="Comment" id="userComment" cols="50" rows="4"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default CommentAdder;
