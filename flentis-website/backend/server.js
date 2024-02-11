const express = require("express");
const app = express();
const sql = require("mssql");
const cors = require("cors");

app.use(cors()); // Enable CORS

const dbConfig = {
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

async function connectToDatabase() {
  try {
    await sql.connect(dbConfig);
    console.log("Connected to the database");
  } catch (err) {
    console.error("Error connecting to the database", err);
  }
}

connectToDatabase();

app.get("/", async (req, res) => {
  try {
    const result = await sql.query`SELECT top 1 * FROM TblBlogs`;
    res.json('NOT ALLOWED');
  } catch (err) {
    console.error("Error executing SQL query", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/getInsights/:type/:offset", async (req, res) => {
  let iType = req.params["type"];
  let offset = req.params["offset"];
  iType = iType.replace("_", " ");
  if (alltypes.includes(iType.toLowerCase())) {
    try {
      let result = await sql.query`exec [USPGetAllBlogsWithParams] @type = ${iType}, @offset = ${offset}`;
      return res.json(result.recordset);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Internal Server Error");
    }
  } else {
    return res.json("Incorrect insight type");
  }
});

app.get("/getInsightsAll", async (req, res) => {
  try{
    let result =
    await sql.query`SELECT top 6 id,insight_type,banner_image,title,meta_description,tags,url_link FROM TblBlogs order by created_date desc`;
    return res.json(result.recordset);
  } catch (err)
  {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
})

app.get("/blogsCount/:type", async (req, res) => {
  try {
    let iType = req.params["type"];
    iType = iType.replace("_", " ");
    let result ;
    if (iType.toLowerCase() == "all") {
      result =
        await sql.query`SELECT count(id) as count FROM TblBlogs`;
    } else {
      result =
        await sql.query`SELECT count(id) as count FROM TblBlogs where insight_type like ${iType}`;
    }
    return res.json(result.recordset);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
})

app.get("/insights/:custom_url", async (req, res) => {
  try {
    const result =
      await sql.query`SELECT * FROM TblBlogs where url_link = ${req.params.custom_url} order by created_date desc`;
    return res.json(result.recordset);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
});

app.get("/flashcards", async (req, res) => {
  try {
    const result =
      await sql.query`SELECT [id],[title],[custom_url] FROM TblFlashCardDescription where isactive=1 order by title asc`;
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
