import axios from "axios";

const app_key = process.env.REACT_APP_ADZUNA_KEY;
const app_id = process.env.REACT_APP_ADZUNA_APP_ID;
const JOB_URL = process.env.REACT_APP_ADZUNA_URL;

export const fetchJobs = async (country, query) => {
  if (!country.code) {
    country = await fetchCountry();
  }
  let url =
    JOB_URL +
    `${country.code}/search/1?app_id=${app_id}&app_key=${app_key}&what=${query.what}&where=${query.where}&results_per_page=20`;
  try {
    const {
      data: { results, count },
    } = await axios.get(url);

    if (!Object.keys(results).length) {
      return { count, query };
    }

    return { results, count, query };
  } catch (error) {
    return error;
  }
};

//Get country code
export const fetchCountry = async () => {
  const url = "https://freegeoip.app/json/"; //"http://ip-api.com/json";
  const {
    data: { country_code, country_name },
  } = await axios.get(url);
  return { code: country_code.toLowerCase(), name: country_name };
};
