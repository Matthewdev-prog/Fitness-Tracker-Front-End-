const MAIN_URL = "http://fitnesstrac-kr.herokuapp.com/api/users/";

const registerUser = async ({ username, password }) => {
  await fetch(`${MAIN_URL}register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
};

const loginUser = async ({ username, password }) => {
  await fetch(`${MAIN_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
};

const getUserInfo = async (token) => {
  await fetch(`${MAIN_URL}me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json)
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
};

const getUsersPublicRoutines = async ({ username, token }) => {
  await fetch(`${MAIN_URL}${username}/routines`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
  getUsersPublicRoutines,
};
