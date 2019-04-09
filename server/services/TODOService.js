const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class TODOService {
    constructor(dataFile){
        this.dataFile = dataFile;
    }
    async getTodos() {
        const data = await this.fetchData();

        return data.map((todo) => {
            return { id: todo.id, title: todo.title,
                    content: todo.content};
        });
    }
    async addTodo(title, content){
        const data = await this.getTodos();
        let id = data.length;
        data.unshift({id, title, content});
        return writeFile(this.dataFile, JSON.stringify(data));
    }
    async deleteTodo(id){
        const data = await this.getTodos();
        data.splice(id, 1);
        return writeFile(this.dataFile, JSON.stringify(data));
    }
    async fetchData(){
        const data = await readFile(this.dataFile, 'utf8');
        if(!data) return [];
        return JSON.parse(data);
    }
}
module.exports = TODOService;