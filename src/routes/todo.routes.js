const todoRoutes = require("express").Router();
const {TodoController} = require("./../controllers");

todoRoutes.get("/",TodoController.fetchAllTodos);
todoRoutes.post("/",TodoController.createTodo);
todoRoutes.put("/",TodoController.updateTodo);
todoRoutes.get("/getTodoByID",TodoController.getTodoById);




module.exports = todoRoutes;