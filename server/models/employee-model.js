const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employee = new Schema(
    {
        name: { type: String, required: true},
        location: { type: String, required: true},
        startDate: { type: Date, required: true},
        salary: { type: Number, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('employees', Employee)