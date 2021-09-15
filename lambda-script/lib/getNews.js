const NewsAPI = require("newsapi");

const getNews = async (queryParameters) => {
  const newsapi = new NewsAPI("b85678f8a38f484daa822a20bb9d8db5");
  let response;
  await newsapi.v2
    .everything({
      q: queryParameters.keywords,
      sources: queryParameters.sources,
      from: "2021-09-01",
      to: "2021-09-14",
      language: "en",
      sortBy: "relevancy",
      page: 1,
    })
    .then((r) => {
      response = r;
    });
  return response;
};

module.exports = getNews;
