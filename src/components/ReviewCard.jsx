import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewId } from "../../utils/api";
import { useState } from "react";
import Votes from "./Votes";
import Comments from "./Comments";

function ReviewCard({ userId }) {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { review_id } = useParams();

  useEffect(() => {
    getReviewId(review_id)
      .then((review) => {
        setReview(review.review);
        setIsLoading(false);
      })
      .catch((err) => {
        //err handling
      });
  }, [review_id]);

  if (isLoading) {
    return <h2 className="commentsButtons"> Loading Review Card...</h2>;
  } else {
    return (
      <div>
        <ul className="ReviewCardSingle">
          <li>
            <img
              className="img"
              src={review.review_img_url}
              alt={`Review for ${review.title}`}
            />
            <p className="ReviewTitle">{review.title}</p>
            <p className="ReviewCategory">{review.category}</p>
            <p className="ReviewBody">{review.review_body}</p>
            <p className="ReviewDesigner">Owner: {review.owner}</p>
          </li>
          <Votes review_id={review.review_id} review={review} />
          <Comments userId={userId} review_id={review_id} />
        </ul>
      </div>
    );
  }
}

export default ReviewCard;
