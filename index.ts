// se§
const jobsAPI = "https://jobsearch.api.jobtechdev.se/search?q=fullstack&offset=0&limit=10"

const searchWord = "search?q=fullstack&offset=0&limit=10";

const searchJobs = async () => {
  try {
    const response = jobsAPI;
    const result = await fetch(response);

    console.log(result);


  } catch (error) {
    console.log(error);
  }
}

searchJobs();
