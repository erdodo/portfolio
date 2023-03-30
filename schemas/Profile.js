const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
    "logo": {
        "type": "String"
    },
    "name": {
        "type": "String"
    },
    "textList": {
        "type": [
            "String"
        ]
    },
    "cvLink": {
        "type": "String"
    },
    "mainBackground": {
        "type": "String"
    },
    "profileImage": {
        "type": "String"
    },
    "job": {
        "type": "String"
    },
    "email": {
        "type": "String"
    },
    "socialLinks": {
        "type": [
            "Mixed"
        ]
    },
    "skill": {
        "type": [
            "Mixed"
        ]
    }
})
module.exports = mongoose.model('Profile', ProfileSchema)