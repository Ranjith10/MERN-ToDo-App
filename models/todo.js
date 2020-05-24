const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create schema
const TodoSchema = new Schema({
    type: String,
    action: [true, 'Todo text field is mandatory']
}) 

//Create model 
const Todo = mongoose.model('todo', TodoSchema)

module.exports = Todo