const express = require("express");
const path = require("path");

const app = express();

const members = [
  {
    id: 1,
    name: "masoud",
    email: "masoud@gmail.com",
    status: "active",
  },
  {
    id: 2,
    name: "ali",
    email: "ali@gmail.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "hasan",
    email: "hasan@gmail.com",
    status: "active",
  },
];

app.get("/api/members", (req, res) => {
  res.json(members);
});

//set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
