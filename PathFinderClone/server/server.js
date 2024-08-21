const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '50mb', extended: true}));

require("./src/app/models/db");

app.get("/", (req, res) => {
    res.send({massege: "Welcome to Document Upload application."});
});
  
require("./src/app/routes/courseTracker.route")(app);

const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

