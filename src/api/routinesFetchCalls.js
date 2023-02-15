const MAIN_URL = "http://fitnesstrac-kr.herokuapp.com/api/routines";

const fetchPublicRoutines = async () => {
  const response = await fetch(MAIN_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

const postNewRoutine = async ({ name, goal, isPublic, token }) => {
  const response = await fetch(MAIN_URL, {
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
  });
  const result = await response.json();

  console.log(result);

  return result;
};

const editRoutine = async ({ routineId, name, goal, token }) => {
  const response = await fetch(`${MAIN_URL}/${routineId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, goal }),
  });
  const result = await response.json();

  console.log(result);

  return result;
};

module.exports = {
  fetchPublicRoutines,
  postNewRoutine,
  editRoutine,
};
