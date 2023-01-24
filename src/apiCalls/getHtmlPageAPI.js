import axios from "axios";

const getHtmlPageAPI = (language, title, resultCallback) => {
  const endpoint = `https://${language}.wikipedia.org/w/rest.php/v1/page/${title}/html`;
  axios.get(endpoint)
    .then((res, err) => {
      const data = res.data;
      resultCallback(data);
    })
}

export default getHtmlPageAPI;