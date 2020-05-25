const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create schema
const TodoSchema = new Schema({
  todoItem: {
    type: String,
    required: [true, 'The todo text field is required']
  },
  active: {
    type: Boolean,
    default: true,
  }
})

//Create model 
const Todo = mongoose.model('todo', TodoSchema)

module.exports = Todo