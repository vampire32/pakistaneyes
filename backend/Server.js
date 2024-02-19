const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const connectDB = require("./db");
const apiRoutes = require("./api/api");
const app = express();
app.use(bodyParser.json());
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;
connectDB();
// API Routes
app.use("/api", apiRoutes);


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
