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
    return GamesApi
    .get(`/reviews/${review_id}`)
    .then(( review ) => {
      return review.data;
    })
    .catch((err) => {
        // console.log(err);
      });
  };

export const patchVotes = (review_id) => {
  return GamesApi
  .patch(`/reviews/${review_id}`, {inc_votes:1})
  .then((response)=>{
    return response.data.review
  }) .catch((err) => {
    console.log(err);
  });
}
