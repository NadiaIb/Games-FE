import { useEffect, useState } from "react";
import { getReviews } from "../../utils";

function Reviews() {
  const [listReviews, setListReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [voteChange, setVoteChange] = useState(false);

  useEffect(() => {
    getReviews()
      .then((reviews) => {
        // console.log(reviews)
        setListReviews(reviews);
        setIsLoadingReviews(false);
      })
      .catch((err) => {
        //need to add err logic
      });
  }, []); //add category_slug, sort_by, order

  const handleVotes = (review_id) => {
    if(!voteChange){
      setVoteChange((currVotes)=>{
        currVotes + 1
      })
    }
  };
  
  // console.log(review.votes)
  
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
                Designed by: {review.designer}</p>
              <button onClick={handleVotes}>👍🏼</button>
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
