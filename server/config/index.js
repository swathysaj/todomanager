const path = require('path');

module.exports = {
    development: {
        data: {
            todos: path.join(__dirname, '../data/todos.json'),
        }
    },
};