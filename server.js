const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;
const filePath = "models.json";

app.use(express.json());

app.get("/", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error("Error parsing JSON data:", parseError);
    }
  });
});

app.get(`/:brandName/`, (req, res) => {
  const brandName = req.params.brandName;
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      const brand = jsonData[brandName];
      res.json(brand);
    } catch (parseError) {
      console.error("Error parsing JSON data:", parseError);
    }
  });
});

app.get(`/:brandName/:carModel/`, (req, res) => {
  const brandName = req.params.brandName;
  const carModel = req.params.carModel;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      return;
    }

    try {
      const jsonData = JSON.parse(data);
      const models = jsonData[brandName].modelSpecificProblems[carModel];
      res.json(models);
    } catch (parseError) {
      console.error("Error parsing JSON data:", parseError);
    }
  });
});
app.listen(PORT, () => {
  console.log(`Server is running`);
});
