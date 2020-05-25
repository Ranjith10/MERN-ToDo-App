const express = require('express')
const router = express.Router()

const Todo = require('../models/todo')

router.get('/', (req, res) => {
    console.log("In root")
})

router.get('/todos', (req, res) => {
    Todo.todo.find({}, 'action')
        .then(data => res.json(data))
})

router.post('/todos', (req, res) => {
    if(req.body.action){
        Todo.create(req.body)
          .then(data => res.json(data))
          .catch(next)
    }else {
        res.json({
          error: "The input field is empty"
        })
    }
})

router.delete('/todos:id', (req, res) => {
    Todo.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next)
})

router.put('/todos:id', (req, res) => {

})

module.exports = router