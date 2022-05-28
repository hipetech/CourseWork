const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const clientRoutes = require("./routes/clientRoutes");



const app = express();
app.use(cors());
app.use(bodyParser.json());
const PORT = 5000;

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`));

clientRoutes(app);





