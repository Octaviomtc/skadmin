var path = require('path');

var root = path.normalize(__dirname+"/..");

var config = {};



// AMBIENTE DE DESAROLLO
config.development = {
  maxAge: 20 * 60 * 1000,
  root:           root,
  name_db:        "shkola_admin",
  host_db:        "localhost",
  db:             "mongodb://localhost/shkola_admin",
  env:            "development",
  port:           process.env.PORT || 3000
};




// AMBIENTE DE PRODUCCION
config.production = {
  maxAge: 1 * 60 * 1000,
  root:           root,
  name_db:        "shkola_admin",
  host_db:        "localhost",
  db:             "mongodb://localhost/shkola_admin",
  env:            "production",
  port:           process.env.PORT || 8080
};




module.exports = config;
