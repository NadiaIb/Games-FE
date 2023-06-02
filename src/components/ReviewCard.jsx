import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewId } from "../../utils";
import { useState } from "react";
import Votes from "./Votes";

function ReviewCard() {
  const [review, setReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  let { review_id } = useParams();

  useEffect(() => {
    getReviewId(review_id)
      .then((review) => {
        setReview(review.review);
        // console.log(review)
        setIsLoading(false);
      })
      .catch((err) => {
        //err handling
      });
  }, [review_id]);

  if (isLoading) {
    return <h2> Loading Review Card...</h2>;
  } else {
    return (
      <div className="ReviewCard">
        <ul>
          <li>
            {" "}
            <img
              className="img"
              src={review.review_img_url}
              alt={`Review for ${review.title}`}
            />{" "}
          </li>
          <li className="ReviewTitle">{review.title}</li>
          <li className="ReviewCategory">{review.category}</li>
          <li className="ReviewBody">{review.review_body}</li>
          <li className="ReviewDesigner">Owner: {review.owner}</li>
          {/* <li>Votes: {review.votes}</li> */}
        </ul>
        <Votes review_id={review.review_id} review={review}/>
      </div>
    );
  }
}

export default ReviewCard;
