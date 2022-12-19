const { Todos } = require("./../models");


const getTodoById = async (id) => {
    return Todos.findOne({ where: { id } });
}

const getAllTodos = async () => {
    try {
        const todos = await Todos.findAll({});
        return todos;
    } catch (error) {
        throw error;
    }
};

const insertTodos = async (title, description) => {
    try {
        const newTodo = await Todos.create({ title, description, completed: false });
        await newTodo.save();
        return newTodo;
    } catch (error) {
        throw error;
    }
};

const updateTodoById = async (id, data) => {
    try {
        const updateTodo = await Todos.update(data, {
            where: { id },
        });
        return getTodoById(id);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllTodos,
    insertTodos,
    updateTodoById
}