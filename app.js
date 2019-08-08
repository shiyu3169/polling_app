const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();

const poll = require("./routes/poll");

// Set public folder
app.use(express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Enable CORS
app.use(cors());

app.use("/poll", poll);

const port = 3000;

// Start Server
app.listen(port, () => console.log(`Server started on port ${port}`));
