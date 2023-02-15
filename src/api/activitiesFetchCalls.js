const MAIN_URL = "http://fitnesstrac-kr.herokuapp.com/api/activities";

const fetchAllActivities = async () => {
  const response = await fetch(MAIN_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();

  console.log(result);

  return result;
};

module.exports = {
  fetchAllActivities,
};
