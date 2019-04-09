const express = require('express');
const router = express.Router();

module.exports = (param) => {
    const { todoService } = param;

    router.get('/', (req, res, next) => {
        return res.render('index', {
            title: 'TODOManager',
        });
    });


    router.post('/', async (req, res, next) => {
        const todoTitle = req.body.title;
        const todoContent = req.body.content;
        await todoService.addTodo(todoTitle, todoContent);
        return res.redirect('/');
    });
    router.delete('/:id', async (req, res, next) => {
        const id = req.body.id;
        await todoService.deleteTodo(id);
        return res.redirect('/');
    });

    return router;
};