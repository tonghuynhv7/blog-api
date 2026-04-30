const express = require("express");
const app = express();

app.use(express.json());

const postRoutes = require("./routes/post");
app.use("/posts", postRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});