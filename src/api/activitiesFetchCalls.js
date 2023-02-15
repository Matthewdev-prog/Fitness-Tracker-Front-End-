const MAIN_URL = "http://fitnesstrac-kr.herokuapp.com/api/activities";

const fetchAllActivities = async () => {
  await fetch(MAIN_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((results) => {
      console.log(results);
      return results;
    })
    .catch((err) => console.error(err));
};

module.exports = {
  fetchAllActivities,
};
