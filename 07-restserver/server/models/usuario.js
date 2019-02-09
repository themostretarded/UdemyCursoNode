const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es de ahuevo']
    },
    email: {
        type: String,
        unique:true,
        require: [true, 'el correo es de ahuevo']
    },
    password: {
        type: String,
        required: [true, 'Es obvio que si se ocupa el password no crees?']
    },
    img: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: "USER_ROLE"
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

usuarioSchema.plugin( uniqueValidator ,{ message: '{PATH} debe ser unico' })

module.exports = mongoose.model('Usuario', usuarioSchema);