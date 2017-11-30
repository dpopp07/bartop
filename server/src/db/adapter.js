const RethinkDBAdapter = require('js-data-rethinkdb').RethinkDBAdapter;
const dbInfo = require('../../config').database;

// this creates a connection to the database
module.exports = new RethinkDBAdapter({
  rOpts: dbInfo
});