const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo");

router.route("/")
    .get(todoController.getAllTodos)
    .post(todoController.createNewTodo);

router.route("/:id")
    .get(todoController.getTodo)
    .put(todoController.updateTodo)
    .delete(todoController.deleteTodo);

module.exports = router;