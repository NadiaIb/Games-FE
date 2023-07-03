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
      return err;
    });
};

export const getReviewId = (review_id) => {
  return GamesApi.get(`/reviews/${review_id}`)
    .then((review) => {
      return review.data;
    })
    .catch((err) => {
      return err;
    });
};

export const getComments = (review_id) => {
  return GamesApi.get(`/reviews/${review_id}/comments`)
    .then((response) => {
      return response.data.comments;
    })
    .catch((err) => {
      return err;
    });
};

export const getUsers = () => {
  return GamesApi.get("/users")
    .then((users) => {
      return users.data;
    })
    .catch((err) => {
      return err;
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
    .catch((err) => {
      return err;
    });
};

export const patchVotes = (review_id) => {
  return GamesApi.patch(`/reviews/${review_id}`, {
    inc_votes: 1,
  })
    .then((response) => {
      return response.data.review;
    })
    .catch((err) => {
      return err;
    });
};

export const deleteComment = (comment_id) => {
  console.log("Deleting comment with ID:", comment_id);
  return GamesApi.delete(`/comments/${comment_id}`);
};
