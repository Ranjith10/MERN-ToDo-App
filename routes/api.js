const express = require('express')
const router = express.Router()

const Todo = require('../models/todo')

router.get('/', (req, res) => {
    console.log("In root")
})

router.get('/todos', (req, res) => {
    Todo.find({},(err, result) => {
        if(err) {
            res.send(err)
        } else {
            res.send(result)
        }
    })
})

router.post('/todos', (req, res) => {
    if(req.body.todoItem.length > 0){
        Todo.create(req.body)
          .then(data => res.json(data))
          .catch(err => console.log('err', err))
    }else {
        res.json({
          error: "The input field is empty"
        })
    }
})

router.delete('/todos/:id', (req, res) => {
    console.log(req.params)
    Todo.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(err => console.log('err', err))
})

router.put('/todos:id', (req, res) => {

})

module.exports = router