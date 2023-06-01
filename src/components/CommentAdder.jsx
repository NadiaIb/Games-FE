import { useEffect, useState } from "react";
import { postComment } from "../../api";

function CommentAdder(
  showComments,
  setShowComments,
  setCurrentComments,
  currentComments,
) {
  
  // const [newUsername, setNewUsername] = useState("grumpy19");

  useEffect(() => {
    postComment({
      username: "grumpy19",
      body: "I love this game"
    })
    .then((body)=>[
      console.log(body)
    ])
  }, []);

  return <p>This is CommentAdder</p>;
}


export default CommentAdder;
