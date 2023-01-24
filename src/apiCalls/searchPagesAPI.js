import axios from "axios";

const searchPagesAPI = (searchText, limit, language, resultCallback) => {
  const endpoint = `https://${language}.wikipedia.org/w/rest.php/v1/search/page`;
  const config = {
    params: {
      q: searchText,
      limit: limit
    }
  }

  axios.get(endpoint, config)
    .then((res, err) => {
      const data = res.data;
      resultCallback(data.pages);
    })
}

export default searchPagesAPI;