const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const app = express();
const PORT = 5000;

app.use(cors());
app.get("/exoplanets", async (req, res) => {
  const response = await fetch(
    "https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+ps+where+tran_flag=1+and+default_flag=1+order+by+pl_name&format=json"
  );
  const data = await response.json();
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

axios
  .get("http://localhost:5173/exoplanets")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
