import { useEffect, useState } from "react";
import { getReviews } from "../../api";
import CategorySort from "./CategorySort";


function Reviews() {
  const [listReviews, setListReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("")

  useEffect(() => {
    getReviews()
      .then((reviews) => {
        setListReviews(reviews);
        setIsLoadingReviews(false);
      })
      .catch((err) => {});
  }, []);

  if (isLoadingReviews) {
    return <h2> Loading Reviews...</h2>;
  } else {
    return (
      <section>
        <h2> All Reviews ({listReviews.length}) </h2>
        <CategorySort setIsLoadingReviews={setIsLoadingReviews} listReviews={listReviews} setListReviews={setListReviews}/>
        <ul>
          {listReviews.map((review) => {
            return (
              <li key={review.review_id} className="ReviewCard">
                <img
                  className="img"
                  src={review.review_img_url}
                  alt={review.review_img_url}
                />
                <p className="ReviewTitle"> {review.title}</p>
                <p className="ReviewCategory"> {review.category}</p>
                <p className="ReviewDesigner"> Designed by: {review.designer}</p>
                <p>Votes: {review.votes}</p>
                <a href={`/reviews/${review.review_id}`}> Read full review </a>
              </li>           
              
            );
          })}
        </ul>
      </section>
    );
  }
}
export default Reviews;
