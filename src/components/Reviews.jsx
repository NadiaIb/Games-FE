import { useEffect, useState } from "react";
import { getReviews } from "../../api";
import { useSearchParams } from "react-router-dom";

function Reviews() {
  const [listReviews, setListReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const sortByQuery = searchParams.get("sort_by"); // "title"
    const orderQuery = searchParams.get('order'); // "title"

  useEffect(() => {
    getReviews()
      .then((reviews) => {
        setListReviews(reviews);
        setIsLoadingReviews(false);
      })
      .catch((err) => {});
  }, [sortByQuery,orderQuery]);

  const handleSortChange = (event) => {
    const sortByValue = event.target.value;
    // copy existing queries to avoid mutation
    const newParams = new URLSearchParams(searchParams);
    // set the sort_by query
    if (sortByValue) {
      newParams.set("sort_by", sortByValue);
    } else {
      newParams.delete("sort_by");
    }
    // update the search params
    setSearchParams(newParams);
  };
  
  const setSortOrder = (direction) => {
    // copy existing queries to avoid mutation
    const newParams = new URLSearchParams(searchParams);
    // set the order query
    newParams.set('order', direction);
    setSearchParams(newParams);
  };


  if (isLoadingReviews) {
    return <h2> Loading Reviews...</h2>;
  } else {
    return (
      <section>
        <select onChange={handleSortChange}>
          <option value="">Sort By</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="title">Title</option>
        </select>

        <button onClick={() => setSortOrder("asc")}>⬆</button>
        <button onClick={() => setSortOrder("desc")}>⬇</button>

        <h2> All Reviews ({listReviews.length}) </h2>
        <ul>
          {listReviews.map((review) => {
            return (
              <li key={review.review_id} className="ReviewCard">
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
