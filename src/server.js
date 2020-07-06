const express = require("express");

// initializations
const app = express();

// settings
app.set("port", process.env.PORT || 3000);

// routes
app.use("/", require("./routes/index"));

app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
