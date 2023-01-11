const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const appconst = require('./app/misc/constants.js');

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/ui.route.js')(app);
require('./app/routes/client.route.js')(app);
require('./app/misc/version.js')(app);

console.log(__dirname);


var server = app.listen(appconst.APP_PORT, function () {
    var host = server.address().address
    var port = server.address().port
    console.log(""+appconst.APP_NAME+" v"+appconst.APP_VERSION+" Listening http://%s:%s", host, port)
  });