const autoReport = require("../controller/courseTracker.controller");

module.exports = (app) => {
  app.post(
    "/insertData",
    autoReport.insertData
  );
}