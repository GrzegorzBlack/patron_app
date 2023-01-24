import axios from "axios";

const getPageLanguagesAPI = (language, title, resultCallback) => {
  const endpoint = `https://${language}.wikipedia.org/w/rest.php/v1/page/${title}/links/language`;
  axios.get(endpoint)
    .then((res, err) => {
      const data = res.data;
      resultCallback(data);
    })
}

export default getPageLanguagesAPI;