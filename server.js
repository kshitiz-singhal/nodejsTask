const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require("./models");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



db.sequelize.sync();


require('./routes/authentication')(app);
require('./routes/getuserlist')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});