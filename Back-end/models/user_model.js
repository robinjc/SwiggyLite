const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        unique: true,
        type: String,
        required: true,
        trim: true,
    },
    password: {        
        type: String,
        required: true,
        trim: true,
    },
    role: {
        type: String,
        required: true,
    },


}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;