import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Todo from "../Models/Todo.js";

let url = 'monroe/todos/'


class TodoService {

  constructor(){
    this.getTodos()
  }
  async getTodos() {
    let res = await api.get(url);
    ProxyState.todos = res.data.data.map(td => new Todo(td))
  }

  async addTodo(todo) {
    let res = await api.post(url, todo);
    ProxyState.todos.push(new Todo(res.data.data))
    ProxyState.todos = ProxyState.todos
  }

  async toggleTodoStatus(todoId) {
    let todo = await ProxyState.todos.find(todo => todo.id == todoId);

    if(todo.completed){
      todo.completed = false
    } else {
      todo.completed = true
    }

    let res = await api.put(url + todoId, todo);
    this.getTodos()
  }

  async removeTodo(todoId) {
    await api.delete(url + todoId)
    this.getTodos()
  }
}

const todoService = new TodoService();
export default todoService;