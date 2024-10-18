const express = require("express");
const app = express();
const port = 8888;

app.get("/", (request, result) => {
  result.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
