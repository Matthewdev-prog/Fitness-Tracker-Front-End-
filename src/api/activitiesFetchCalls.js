const MAIN_URL = "http://fitnesstrac-kr.herokuapp.com/api/activities";

const fetchAllActivities = async () => {
  const response = await fetch(MAIN_URL, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  
  return result;
};

const createNewActivity = async ({name, description, token}) => {
  const response = await fetch(MAIN_URL, {
    method: "POST",
    headers:{
      "Content-type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify({
      name,
      description
    })
  })
  const result = await response.json();

  console.log(result);

  return result;
}

module.exports = {
  fetchAllActivities,
  createNewActivity,
};
