const MAIN_URL = "http://fitnesstrac-kr.herokuapp.com/api/users/";

const registerUser = async ({ username, password }) => {
  const response = await fetch(`${MAIN_URL}register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  result = await response.json();

  return result;
};

const loginUser = async ({ username, password }) => {
  const response = await fetch(`${MAIN_URL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const result = await response.json();

  return result;
};

const getUserInfo = async (token) => {
  const response = await fetch(`${MAIN_URL}me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();

  return result;
};

const getUsersPublicRoutines = async ({ username, token }) => {
  if (token) {
    const response = await fetch(`${MAIN_URL}${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();

    return result;
  } else {
    const response = await fetch(`${MAIN_URL}${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    return result;
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserInfo,
  getUsersPublicRoutines,
};
