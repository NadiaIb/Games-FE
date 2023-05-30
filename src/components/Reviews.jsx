import { useEffect, useState } from "react";
import { getReviews } from "../../utils";
import ReviewCard from "./ReviewCard";

function Reviews() {
  const [listReviews, setListReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);

  useEffect(() => {
    setIsLoadingReviews(true);
    getReviews()
      .then((reviews) => {
        setListReviews(reviews);
      })
      .catch((err) => {
        //need to add err logic
      });
    setIsLoadingReviews(false);
  }, []); //add category_slug, sort_by, order

  if (isLoadingReviews) {
    return <h2> Loading Reviews...</h2>;
  } else {
    return (
      <section>
          <h2> All reviews ({listReviews.length}) </h2>
        {listReviews.map((review) => {
          return (
            <ul key={review.review_id} className="list-item reviewsList">
              <li> {review.title}</li>
              <li> <img className="img" src={review.review_img_url} alt="" /> </li>
              <li> {review.category}</li>
              <li> {review.review_body}</li>
            </ul>
          );
        })}
      </section>
    );
  }
}

export default Reviews;
