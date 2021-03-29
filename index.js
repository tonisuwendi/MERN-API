const express = require("express");

const app = express();

app.use((_, res) => {
  res.send("halo");
});

app.listen(4000);
