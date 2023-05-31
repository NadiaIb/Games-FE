import axios from "axios";

const GamesApi = axios.create({
  baseURL: "https://nc-games-1ybo.onrender.com/api",
});

export const getReviews = () => {
  return GamesApi.get("/reviews")
    .then(({ data }) => {
      return data.review;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getReviewId = (review_id) => {
  return GamesApi.get(`/reviews/${review_id}`)
    .then((review) => {
      return review.data;
    })
    .catch((err) => {
      // console.log(err);
    });
};

export const getComments = (review_id) => {
  return GamesApi.get(`/reviews/${review_id}/comments`)
    .then((response) => {
       return response.data.comments;
    })
    .catch((err) => {
      console.log(err);
    });
};
