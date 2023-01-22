require("dotenv").config();

const db = require("./config/db");
db();
const http = require("http");





const app = require("./app");
const server = http.createServer(app);


const PORT = process.env.PORT || 4000;









server.listen(PORT, () => console.log("APP is running"));


