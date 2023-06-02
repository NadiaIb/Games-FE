import { useState, useEffect } from "react";
import { patchVotes } from "../../utils";

function Votes({ review_id, votes, review }) {
  const [voteChange, setVoteChange] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleVotes = (idNum) => {
    setVoteChange((currVote) => currVote + 1);
    patchVotes(idNum)
    .catch((err) => {
      setVoteChange((currVote) => currVote - 1);
      setErrorMessage("Issue with voting, please try again later");
    });
  };

  return (
    <button
      onClick={() => {
        handleVotes(review_id);
      }}
      disabled={voteChange !== 0}
    >
      <span aria-label="Up vote this review">
        👍🏽 {review.votes + voteChange}
      </span>
    </button>
  );
}
export default Votes;
