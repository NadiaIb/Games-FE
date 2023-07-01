import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewId } from "../../api";
import { useState } from "react";
import Votes from "./Votes";
import Comments from "./Comments";

function ReviewCard({ 
  isUserLoggedIn,
  setIsUserLoggedIn,
  user,
  setUser,
  userList,
  setUserList,
  userId
}
) {
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
    return <h2> Loading Review Card...</h2>;
  } else {
    return (
      <div className="ReviewCard">
        <ul >
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
            {/* <p>Votes: {review.votes}</p> */}
          </li>
        </ul>
        <Votes review_id={review.review_id} review={review}/>
        <Comments userId={userId} review_id={review_id} isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} user={user} setUserList={setUserList} userList={userList} setUser={setUser}/>
      </div>
    );
  }
}

export default ReviewCard;
