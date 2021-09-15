function getQueryParameters() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const parameterRange = sheet.getRange(1, 1, 4, 2);
  const parameters = parameterRange
    .getValues()
    // [["keywords", "lgbtq"], ["sources", "reuters"]]
    .map((keyValuePair) => {
      const key = keyValuePair[0].toLowerCase();
      const value =
        typeof keyValuePair[1] === "string"
          ? keyValuePair[1].toLowerCase()
          : keyValuePair[1];
      // "keywords=lgbtq"
      return `${key}=${value}`;
    })
    // ["keywords=lgbtq", "sources=reuters"]
    .join("&");
  // "keywords=lgbtq&sources=reuters"
  return parameters;
}

function fetchNews() {
  const { NUS_API_ENDPOINT } = getConstants();
  // "https://8bkxzc01u7.execute-api.us-west-2.amazonaws.com/dev/news",
  const queryParameters = getQueryParameters();
  // "keywords=lgbtq&sources=reuters"
  const requestUrl = `${NUS_API_ENDPOINT}?${queryParameters}`;
  // "https://8bkxzc01u7.execute-api.us-west-2.amazonaws.com/dev/news?keywords=lgbtq&sources=reuters"
  const response = UrlFetchApp.fetch(requestUrl);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  Logger.log(response.getContentText());
  const articles = JSON.parse(
    response.getContentText()
  ).message.articles.map((a) => [a.title]);
  const startingRow = 7;
  const lastRow = sheet.getLastRow();
  const oldListRange = sheet.getRange(`A${startingRow}:A${lastRow}`);
  oldListRange.clearContent();
  const range = sheet.getRange(
    `A${startingRow}:A${startingRow + articles.length - 1}`
  );
  range.setValues(articles);
  return;
}
