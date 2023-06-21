const pg = require('pg');

let pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'react_gallery'
});

module.exports = pool;