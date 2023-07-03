import { useState } from "react";
import { patchVotes } from "../../api";

function Votes({ review_id, review }) {
  const [voteChange, setVoteChange] = useState(0);
  const [errorStatus, setErrorStatus] = useState(false);

  const handleVotes = (idNum) => {
    setVoteChange((currVote) => currVote + 1);
    patchVotes(idNum)
    .catch((err) => {
      setVoteChange((currVote) => currVote - 1);
      setErrorStatus(true);
    });
  };

  if (errorStatus) {
    return <p>Issue with voting, please try again later</p>;
  }

  return (
    <section>
      <button className="likeButton"
        onClick={() => {
          handleVotes(review_id);
        }}
        disabled={voteChange !== 0}
      >
        <span aria-label="Up vote this review">
          👍🏽 {review.votes + voteChange}
        </span>
      </button>
    </section>
  );
}
export default Votes;
