const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create schema
const TodoSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The todo text field is required']
  }
})

//Create model 
const Todo = mongoose.model('todo', TodoSchema)

module.exports = Todo