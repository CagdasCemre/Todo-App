const db = require("../models");

module.exports = {

    getAllTodos: function(req, res) {
        db.Todo.find()
            .then(function(todos) {
                res.json(todos);
            })
            .catch(function() {
                res.send(err);
            });
    },
    createNewTodo: function(req, res) {
        db.Todo.create(req.body)
            .then(function(newTodo) {
                res.status(201).json(newTodo);
            })
            .catch(function(err) {
                res.send(err);
            });
    },
    getTodo: function(req, res) {
        db.Todo.findById(req.params.id)
            .then(function(todo) {
                res.json(todo.name)
            })
            .catch(function(err) {
                res.send(err);
            });
    },
    updateTodo: function(req, res) {
        db.Todo.findByIdAndUpdate(req.params.id, req.body, { useFindAndModify: false, new: true })
            .then(function(todo) {
                res.json(todo);
            })
            .catch(function(err) {
                res.send(err);
            });
    },
    deleteTodo: function(req, res) {
        db.Todo.findByIdAndDelete(req.params.id, { useFindAndModify: false })
            .then(function(todo) {
                res.send(todo);
            })
            .catch(function(err) {
                res.send(err);
            });
    }

}