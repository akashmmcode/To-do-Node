const { TodoService } = require("./../services");

const fetchAllTodos = async (req, res) => {
    try {
        const todos = await TodoService.getAllTodos();
        res.send({ todos, count: todos.length });   //to get the responce as a json
    } catch (error) {
        res.status(400).send({ error: error });
    }
};

const createTodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTodo = await TodoService.insertTodos(title, description);
        res.send(newTodo);
    } catch (error) {
        res.status(400).send({ error: error });
    }
};

const updateTodo= async (req, res) => {
    try {
        const { id, title, description,completed } = req.body;
        const updateTodo = await TodoService.updateTodoById(id,{title,description,completed});
        res.send(updateTodo);
    } catch (error) {
        res.status(400).send({ error: error });
    }
};

const getTodoById = async (req, res) => {
    try {
        const { id } = req.body;
        const getTodoById = await TodoService.getTodoById(id);
        res.send(getTodoById);
    } catch (error) {
        res.status(400).send({ error: error });
    }
};

const deleteTodoById = async (req, res) => {
    try {
        const { id } = req.body;
        const deleteTodoById = await TodoService.deleteTodoById(id);
        res.send(deleteTodoById);
    } catch (error) {
        res.status(400).send({ error: error });
    }
};



module.exports = {
    fetchAllTodos,
    createTodo,
    updateTodo,
    getTodoById,
    deleteTodoById
}