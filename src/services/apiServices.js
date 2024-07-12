import axios from "../utils/axiosCustomize";

const postCreateNewUser = (email, password, role, username, image) => {
  //submit data
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("role", role);
  data.append("userImage", image);
  data.append("username", username);

  return axios.post("api/v1/participant", data);
};

const getAllUsers = () => {
  return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, role, username, image) => {
  //submit data
  const data = new FormData();
  data.append("role", role);
  data.append("id", id);
  data.append("userImage", image);
  data.append("username", username);

  return axios.put("api/v1/participant", data);
};

const deleteUser = (userId) => {
  return axios.delete("api/v1/participant", { data: { id: userId } });
};

const getUserWithPaginate = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};

const postLogin = (userEmail, userPassword) => {
  return axios.post(`/api/v1/login`, {
    email: userEmail,
    password: userPassword,
    delay: 3000,
  });
};

const postRegister = (email, password, username) => {
  return axios.post(`/api/v1/register`, { email, password, username });
};

const getQuizByUser = () => {
  return axios.get("/api/v1/quiz-by-participant");
};

export {
  postCreateNewUser,
  getAllUsers,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
  getQuizByUser,
};
