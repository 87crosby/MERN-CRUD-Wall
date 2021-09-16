const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
app.use( express.json() ); //tells my app that it can parse json
app.use( express.urlencoded({ extended: true }) ); //tells my app that it can gather form information
app.use(cors()); // tells app it can share resources with react app


require("./server/config/config");


//require the routes
require("./server/routes/ninja.routes")(app)



//app.listen needs to be at the end of the file
app.listen( port, () => console.log(`Listening on port: ${port}`) );