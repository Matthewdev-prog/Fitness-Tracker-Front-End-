const MAIN_URL = "http://fitnesstrac-kr.herokuapp.com/api/routines";

const fetchPublicRoutines = async () => {
  await fetch(MAIN_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((results) => {
      console.log(results);
      return results;
    })
    .catch((err) => console.error(err));
};

const postNewRoutine = async ({ name, goal, isPublic, token }) => {
  await fetch(MAIN_URL, {
    method: "POST",
    headers: {
      "Content-ype": "Application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      goal,
      isPublic,
    }),
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
};

const editRoutine = async ({ routineId, name, goal, token }) => {
  await fetch(`${MAIN_URL}/${routineId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, goal }),
  })
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((err) => console.error(err));
};

module.exports = {
  fetchPublicRoutines,
  postNewRoutine,
  editRoutine,
};
