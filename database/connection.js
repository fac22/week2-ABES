const pg = require('pg');

if (! ) {
  throw new Error('DATABASE_URL environment variable is not set');
}

const options = {
  connectionString: process.env.DATABASE_URL,
};

const db = new pg.Pool(options);

module.exports = db;
