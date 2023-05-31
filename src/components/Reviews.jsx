import { useEffect, useState } from "react";
import { getReviews } from "../../utils";
import ReviewCard from "./ReviewCard";

function Reviews() {
  const [listReviews, setListReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);

  useEffect(() => {
    getReviews()
      .then((reviews) => {
        setListReviews(reviews);
        setIsLoadingReviews(false);
      })
      .catch((err) => {
        //need to add err logic
      });
  }, []); //add category_slug, sort_by, order

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
                <img className="img" src={review.review_img_url} alt={review.review_img_url} />{" "}
              <li className="ReviewTitle"> {review.title}</li>
              </li>
              <li className="ReviewCategory"> {review.category}</li>
              <li className="ReviewDesigner"> Designed by: {review.designer}</li>
              <a href={`/reviews/${review.review_id}`}> Read full review </a>
            </ul>
          );
        })}
      </section>
    );
  }
}

export default Reviews;
