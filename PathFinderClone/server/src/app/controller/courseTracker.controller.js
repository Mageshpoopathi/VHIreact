const autoReport = require("../models/courseTracker.model");

exports.insertData =  async (req, res) => {
  try {
    const result = await autoReport.InsertReportData(req.body);
    res.send({
      status: "SUCCESS",
      messageCode: "MSG200",
      message: "User DB Connection Updated Successfully",
      userMessage: "User DB Connection Updated Successfully !!!.",
      result
    });
  } catch (e) {
    res.status(500).send({
      status: "Failure",
      messageCode: "MSG500",
      message: "Some error occurred while Updating records",
      userMessage:
        "Connection error : User DB Connection status Updating Failed!!!",
    });
  }
};