const db = require("./db.js"); // importing the db config

app.get("/", async (req, res) => {
    const todos = await db("users"); // making a query to get all todos
    res.json({ todos });
  });

