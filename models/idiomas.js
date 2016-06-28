var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var idiomasSchema = new Schema({
  nombre: { type: String }
}
);

module.exports = mongoose.model('idiomas', idiomasSchema);
