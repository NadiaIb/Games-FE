import { useEffect, useState } from "react";
import { getReviews } from "../../api";
import { useSearchParams } from "react-router-dom";

function Reviews() {
  const [listReviews, setListReviews] = useState([]);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);

  let sortByQuery = searchParams.get("sort_by");
  let orderQuery = searchParams.get("order");
  let categoryQuery = searchParams.get("category");

  const handleSelectedCategory = (event) => {
    const selectedCategory = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (selectedCategory) {
      newParams.set("category", selectedCategory);
    } else {
      newParams.delete("category");
    }
    setSearchParams(newParams);
  };

  const handleSortChange = (event) => {
    const sortByValue = event.target.value;
    const newParams = new URLSearchParams(searchParams);
    if (sortByValue) {
      newParams.set("sort_by", sortByValue);
      newParams.set("order", "desc");
    } else {
      newParams.delete("sort_by");
    }
    setSearchParams(newParams);
  };

  const setSortOrder = (direction) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", direction);
    setSearchParams(newParams);
  };

  useEffect(() => {
    getReviews()
      .then((reviews) => {
        const uniqueCategories = [
          ...new Set(reviews.map((review) => review.category)),
        ];
        setCategories(uniqueCategories);

        if (categoryQuery) {
          const filteredReviews = reviews.filter(
            (review) => review.category === categoryQuery
          );

          if (sortByQuery && orderQuery) {
            const sortedReviews = [...filteredReviews].sort((a, b) => {
              if (sortByQuery === "created_at") {
                return orderQuery === "desc"
                  ? new Date(b.created_at) - new Date(a.created_at)
                  : new Date(a.created_at) - new Date(b.created_at);
              } else if (sortByQuery === "votes") {
                return orderQuery === "desc"
                  ? b.votes - a.votes
                  : a.votes - b.votes;
              } else if (sortByQuery === "title") {
                return orderQuery === "desc"
                  ? b.title.localeCompare(a.title)
                  : a.title.localeCompare(b.title);
              }
            });
            setListReviews(sortedReviews);
          } else {
            setListReviews(filteredReviews);
          }
        } else if (sortByQuery && orderQuery) {
          const sortedReviews = [...reviews].sort((a, b) => {
            if (sortByQuery === "created_at") {
              return orderQuery === "desc"
                ? new Date(b.created_at) - new Date(a.created_at)
                : new Date(a.created_at) - new Date(b.created_at);
            } else if (sortByQuery === "votes") {
              return orderQuery === "desc"
                ? b.votes - a.votes
                : a.votes - b.votes;
            } else if (sortByQuery === "title") {
              return orderQuery === "desc"
                ? b.title.localeCompare(a.title)
                : a.title.localeCompare(b.title);
            }
          });
          setListReviews(sortedReviews);
        } else {
          setListReviews(reviews);
        }
        setIsLoadingReviews(false);
      })
      .catch((err) => {});
  }, [sortByQuery, orderQuery, categoryQuery]);

  if (isLoadingReviews) {
    return <h2>Loading Reviews...</h2>;
  } else {
    return (
      <section>
        <div className="sortContainer">
          {categories.map((category) => (
            <button
              key={category}
              value={category}
              onClick={(event) => handleSelectedCategory(event)}
            >
              {category}
            </button>
          ))}
          <button onClick={(event) => handleSelectedCategory(event)}>
            All Reviews
          </button>

          <select
            className="sortButton"
            onChange={(event) => handleSortChange(event)}
          >
            <option value="">Sort By</option>
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
            <option value="title">Title</option>
          </select>
          <button className="orderButton" onClick={() => setSortOrder("asc")}>
            ⬆
          </button>
          <button className="orderButton" onClick={() => setSortOrder("desc")}>
            ⬇
          </button>
        </div>
        <h2> All Reviews ({listReviews.length}) </h2>
        <ul>
          {listReviews.map((review) => {
            return (
              <li key={review.review_id} className="ReviewCard">
                <img
                  className="img"
                  src={review.review_img_url}
                  alt={review.review_img_url}
                />
                <p className="ReviewTitle">{review.title}</p>
                <p className="ReviewCategory">{review.category}</p>
                <p className="ReviewDesigner">Designed by: {review.designer}</p>
                <p>Votes: {review.votes}</p>
                <a href={`/reviews/${review.review_id}`}>Read full review</a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Reviews;
