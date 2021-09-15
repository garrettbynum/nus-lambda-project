"use strict";
const { getNews } = require("./lib");

const ENDPOINT =
  "https://8bkxzc01u7.execute-api.us-west-2.amazonaws.com/dev/news";

module.exports.getNews = async (event) => {
  // {"keywords": "finance", "sources": "reuters"}
  const response = await getNews(event.queryStringParameters);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: response,
        input: event,
      },
      null,
      2
    ),
  };
};
