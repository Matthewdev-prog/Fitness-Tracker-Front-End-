const MAIN_URL = "https://fitnesstrac-kr.herokuapp.com/api/activities/";

const fetchAllActivities = async () => {
  const response = await fetch(MAIN_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();

  return result;
};

const createNewActivity = async ({ name, description, token }) => {
  const response = await fetch(MAIN_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      description,
    }),
  });
  const result = await response.json();

  return result;
};

const editActivity = async ({ id, token, name, description }) => {
  const response = await fetch(`${MAIN_URL}${id}`, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      description,
    }),
  });

  const result = await response.json();

  return result;
};

const getRoutinesByActivity = async ({ id }) => {
  const response = await fetch(`${MAIN_URL}${id}/routines`, {
    headers: {
      "Content-type": "application/json",
    },
  });

  const result = await response.json();

  return result;
};

module.exports = {
  fetchAllActivities,
  createNewActivity,
  editActivity,
  getRoutinesByActivity,
};
