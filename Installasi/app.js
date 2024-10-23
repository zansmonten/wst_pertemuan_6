const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connRoutes = require("./routes/ConnRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api", connRoutes);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
