import { useEffect, useState } from "react";
import { getReviews, patchVotes } from "../../utils";

function Reviews() {
  const [listReviews, setListReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [voteChange, setVoteChange] = useState(0);
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    getReviews()
      .then((reviews) => {
        setListReviews(reviews);
        setIsLoadingReviews(false);
      })
      .catch((err) => {});
  }, []);

  const handleVotes = (idNum) => {
    setVoteChange((selectedReview) => selectedReview + 1);
    patchVotes(idNum)
    .catch((err) => {
      setVoteChange((selectedReview) => selectedReview - 1);
      setErrorMessage("Issue with voting, please try again later")
    })
  }

  if (isLoadingReviews) {
    return <h2> Loading Reviews...</h2>;
  } else {
    return (
      <section>
        <h2> All Reviews ({listReviews.length}) </h2>
        {listReviews.map((review) => {
          return (
            <ul key={review.review_id} className="ReviewCard">
              <li>
                {" "}
                <img
                  className="img"
                  src={review.review_img_url}
                  alt={review.review_img_url}
                />{" "}
                <p className="ReviewTitle"> {review.title}</p>
                <p className="ReviewCategory"> {review.category}</p>
                <p className="ReviewDesigner">
                  {" "}
                  Designed by: {review.designer}
                </p>
                <button
                  onClick={() => {
                    handleVotes(review.review_id);
                  }}
                >
                  👍🏼{review.votes + voteChange}
                </button>
              </li>
              <a href={`/reviews/${review.review_id}`}> Read full review </a>
            </ul>
          );
        })}
      </section>
    );
  }
}

export default Reviews;
