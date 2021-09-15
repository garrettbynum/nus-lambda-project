function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu("nus")
    .addItem("Setup", "setup")
    .addItem("Run", "fetchNews")
    .addToUi();
  return;
}
