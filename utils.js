import axios from "axios";

const GamesApi = axios.create({
  baseURL: "https://nc-games-1ybo.onrender.com/api",
});

export const getReviews = () => {
//   let path = "/reviews";
  return GamesApi.get("/reviews").then(({ data }) => {
    return data.review;
  })
  .catch((err) => {
    console.log(err);
  });
};

export const getReviewId = (review_id) => {
    // console.log(review_id)
    return GamesApi
    .get(`/reviews/${review_id}`)
    .then(( review ) => {
        // console.log(review.data)
      return review.data;
    })
    .catch((err) => {
        // console.log(err);
      });
  };
