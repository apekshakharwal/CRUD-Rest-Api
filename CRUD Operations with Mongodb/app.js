const http = require("http");
const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoose = require('./config/db.config');

mongoose();

//crud routes 
const route = require('./route/api.routes')
app.use('/', route)



/** Error handling */
app.use((req, res) => {
  const error = new Error('Not Found');
  return res.status(404).json({
    message: error.message
  });
});



/** Server */
const httpServer = http.createServer(app);
const PORT = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));