require("dotenv").config();

const server = require('./server');
const db = require('./db/db.js')
const PORT = process.env.PORT || 5000;

if (!module.parent) {
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}..`);
  });

  db.testAuthentication();
}

// module.exports = server;