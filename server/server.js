require("dotenv").config();

const express = require("express");
const cors = require("cors");
const notion = require("@notionhq/client");

const app = express();
const PORT = 3005;

app.use(cors());

app.get("/schedules", async (req, res) => {
  const client = new notion.Client({
    auth: process.env.NOTION_API_KEY,
    notionVersion: "2022-06-28",
  });

  client.databases
    .query({
      database_id: "7399d5faac7b4ff3b4dc64a0eb40bf81",
      sorts: [
        {
          property: "date",
          direction: "ascending",
        },
        {
          property: "hour",
          direction: "ascending",
        },
      ],
    })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(err.status).send(err.message));
  //   console.log(response);
  //   if (response?.status) {
  //     console.log(response);
  //   }
});

app.listen(PORT, () => {});
