const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3080;

app.listen(PORT, () => {
  console.log("Server is now listening at port 3080");
});