const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let newDate = new Date();
  response.send(
    `${newDate.getDate()}-${newDate.getMonth() + 1}-${newDate.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
