import { useState } from "react";
import { patchVotes } from "../../utils";

function Votes({ review_id, votes, review }) {
  const [voteChange, setVoteChange] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  
  const handleVotes = (idNum) => {
    // console.log("handleVotes called");
    setVoteChange((currVote) => currVote + 1);
    patchVotes(idNum)
      .then(() => {
        // console.log("patchVotes success");
      })
      .catch((err) => {
        console.log("patchVotes error", err);
        setVoteChange((currVote) => currVote - 1);
        setErrorMessage("Issue with voting, please try again later");
      });
  };
  
//   console.log("Votes component rendered");
  
  return (
    <button
      onClick={() => {handleVotes(review_id)}}
    >
      👍🏼 {review.votes + voteChange}
    </button>
    
  );
}
export default Votes;
