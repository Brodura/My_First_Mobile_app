var express = require("express");
const API_Export = require("./API.js");
const cors = require('cors');

const API = new API_Export.API();

const app = express();
app.use(express.json());
app.use(cors());



app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Body START

app.get("/get_all_people", (req, res) => {
  res.send(API.retrievePeople());
});

app.get("/", (req, res) => {
  res.send(req.query);
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.post("/modify_person", (req, res) => {
  API.modifyPerson(
    parseInt(req.body["PeopleID"], 10),
    req.body["Name"],
    req.body["Phone"],
    parseInt(req.body["DepartmentID"], 10),
    req.body["Street"],
    req.body["City"],
    req.body["State"],
    req.body["Postcode"],
    req.body["Country"]
  );
  res.send("Success");
});

app.post("/delete_department", (req, res) => {
  API.deleteDepartment(parseInt(req.body["DepartmentID"], 10));
  res.send("Success");
});

//Body END

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
