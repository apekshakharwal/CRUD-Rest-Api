const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const router = express();
const route = require('./routes/api.routes')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

const db = require('./config/db.config');

db.sequelize.sync();



//simple route
router.get("/", (req, res) => {
  res.json({ message: "Hello Everyone" });
});


router.use('/', route);



/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});



/** Server */
const httpServer = http.createServer(router);
const PORT = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));