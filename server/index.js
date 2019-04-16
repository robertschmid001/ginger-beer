const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/public"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});
// Middleware
app.use(bodyParser.json());
app.use(cors());


const posts = require('./routes/api/trail');
app.use('/api/trail', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));