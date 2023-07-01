import axios from "axios";

const GamesApi = axios.create({
  baseURL: "https://nc-games-1ybo.onrender.com/api",
});

export const getReviews = (category, sort_by, order) => {
  return GamesApi.get("/reviews", {
    params: { category: category, sort_by: sort_by, order: order },
  })
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
      return response.data;
    })
    .catch(() => {
      console.log(error);
    });
};

export const patchVotes = (review_id) => {
  return GamesApi.patch(`/reviews/${review_id}`, { inc_votes: 1 }).then(
    (response) => {
      return response.data.review;
    }
  );
};
