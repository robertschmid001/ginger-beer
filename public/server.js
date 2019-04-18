const express = require('express');
const bodyParser = require('body-parser');
//const serveStatic = require('serve-static')
const cors = require('cors');
const path = require("path");
const app = express();

// app.use("/", serveStatic(path.join(__dirname, '/dist')))
// app.get('*', function (req, res) {
  //   res.sendFile(__dirname + '/dist/index.html')
  // })
  
  
app.use(express.static(__dirname + "/dist"));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "../dist/index.html"));
});
// Middleware
app.use(bodyParser.json());
app.use(cors());


// const posts = require('./routes/api/trail');
// app.use('/api/trail', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));


// create middleware to handle the serving the app
// Catch all routes and redirect to the index file
// Create default port to serve the app on
// const port = process.env.PORT || 5000
// app.listen(port)
// Log to feedback that this is actually running
// console.log('Server started on port ' + port)