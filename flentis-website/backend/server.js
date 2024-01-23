const express = require("express");
const app = express();
const sql = require("mssql");
const cors = require("cors");

app.use(cors()); // Enable CORS

const config = {
  user: "db_a8fc99_newflentiswebsite_admin",
  password: "Aseem@1234",
  server: "sql8002.site4now.net",
  database: "db_a8fc99_newflentiswebsite",
  options: {
    trustServerCertificate: true,
    trustedConnection: false,
    enableArithAbort: true,
  },
};

const alltypes = [
  "all",
  "blog",
  "case study",
  "webinar",
  "infographics",
  "video",
  "e-book",
  "whitepaper",
  "announcement",
];

async function start() {
  try {
    await sql.connect(config);
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to the database", err);
  }
}

start();

app.get("/", async (req, res) => {
  //   res.send("Hello from Node.js backend!");
  try {
    const result = await sql.query`SELECT top 1 * FROM TblBlogs`;
    res.json(result.recordset[0].id);
    console.log(result.recordset[0]);
  } catch (err) {
    console.error("Error executing SQL query", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/getInsights/:type", async (req, res) => {
  let iType = req.params["type"];
  if (iType == "case_study") iType = "case study";
  if (alltypes.includes(iType.toLowerCase())) {
    // res.json(iType);
    try {
      let result;
      if (iType.toLowerCase() == "all")
        result =
          await sql.query`SELECT top 6 * FROM TblBlogs order by created_date desc`;
      else
        result =
          await sql.query`SELECT top 6 * FROM TblBlogs where insight_type like ${iType}`;
      return res.json(result.recordset);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  } else {
    return res.json("Incorrect insight type");
  }
});
app.get("/insights", async (req, res) => {
  try {
    const result =
      await sql.query`SELECT top 6 * FROM TblBlogs order by created_date desc`;
    return res.json(result.recordset);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port # ${port}`);
});
