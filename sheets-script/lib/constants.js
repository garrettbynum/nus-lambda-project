function getConstants() {
  return {
    NUS_API_ENDPOINT:
      "https://8bkxzc01u7.execute-api.us-west-2.amazonaws.com/dev/news",
    QUERY_PARAMETERS: ["Keywords", "Sources", "From", "To"],
  };
}

/*
q
      Keywords or phrases to search for in the article title and body.

      Advanced search is supported here:

      Surround phrases with quotes (") for exact match.
      Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
      Prepend words that must not appear with a - symbol. Eg: -bitcoin
      Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
      The complete value for q must be URL-encoded. Max length: 500 chars.

qInTitle
      Keywords or phrases to search for in the article title only.

      Advanced search is supported here:

      Surround phrases with quotes (") for exact match.
      Prepend words or phrases that must appear with a + symbol. Eg: +bitcoin
      Prepend words that must not appear with a - symbol. Eg: -bitcoin
      Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.
      The complete value for qInTitle must be URL-encoded. Max length: 500 chars.

sources
      A comma-seperated string of identifiers (maximum 20) for the news sources or blogs you want headlines from. Use the /sources endpoint to locate these programmatically or look at the sources index.

domains
      A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to restrict the search to.

excludeDomains
      A comma-seperated string of domains (eg bbc.co.uk, techcrunch.com, engadget.com) to remove from the results.

from
      A date and optional time for the oldest article allowed. This should be in ISO 8601 format (e.g. 2021-09-14 or 2021-09-14T16:56:54)

      Default: the oldest according to your plan.
to
      A date and optional time for the newest article allowed. This should be in ISO 8601 format (e.g. 2021-09-14 or 2021-09-14T16:56:54)

      Default: the newest according to your plan.
language
      The 2-letter ISO-639-1 code of the language you want to get headlines for. Possible options: ardeenesfrheitnlnoptruseudzh.

      Default: all languages returned.
sortBy
      The order to sort the articles in. Possible options: relevancy, popularity, publishedAt.
      relevancy = articles more closely related to q come first.
      popularity = articles from popular sources and publishers come first.
      publishedAt = newest articles come first.

      Default: publishedAt
pageSize
      int
      The number of results to return per page.

      Default: 100. Maximum: 100.
page
      int
      Use this to page through the results.

      Default: 1.
*/
