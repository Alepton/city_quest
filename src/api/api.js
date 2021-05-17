import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "e3e6407a-9d65-4698-9429-3f97aaa4f1ee",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((respons) => {
        return respons.data;
      });
  },

  follow(userId) {
    return instance
    .post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },

  unfollow(userId) {
    return instance
      .delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
  },
}
