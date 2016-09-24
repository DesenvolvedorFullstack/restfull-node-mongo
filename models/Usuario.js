var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
  nome: String,
  email:String,
  senha:String,
  idade: Number,
  perfil:{
  	 nome:String
  }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
