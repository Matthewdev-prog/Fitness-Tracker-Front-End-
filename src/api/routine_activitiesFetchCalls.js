MAIN_URL = "https://fitnesstrac-kr.herokuapp.com/api/routine_activities/";

const editRoutineActivity = async ({ routineActivityId, token, body }) => {
  const response = await fetch(`${MAIN_URL}${routineActivityId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "Application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();

  return result;
};
