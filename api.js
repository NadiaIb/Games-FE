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
// app.get("/api/users", getUsers)

export const getUsers = () => {
  return GamesApi.get("/users")
    .then((users) => {
      // console.log(users)
      return users.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postComment = (review_id, body) => {
  return GamesApi.post(`/reviews/${review_id}/comments`, {
    username: body.username,
    body: body.body,
  })
    .then((response) => {
      // console.log(response)
      return response;
    })
    .catch((err) => {
      // console.log(err);
    });
};
