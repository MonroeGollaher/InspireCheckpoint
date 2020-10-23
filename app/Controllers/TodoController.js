import todoService from "../Services/TodoService.js";
import { ProxyState } from "../AppState.js";

//TODO Create the draw function
function _drawTodos(){ 
  let template = ""
  let newTodo = ProxyState.todos
  console.log(newTodo);
  newTodo.forEach(td => template += td.Template)
  document.getElementById("todo").innerHTML = template

}

export default class TodoController {
  constructor() {
    ProxyState.on("todos", _drawTodos)
    todoService.getTodos();
  }

  getTodos() {
    try {
      todoService.getTodos()
    } catch (error) {
      console.error(error)
    }
  }
  addTodo(e) {
    e.preventDefault();
    var form = e.target;
    var todo = {
      description: form.taskTitle.value
    }

    try {
      todoService.addTodo(todo);
    } catch (error) {
      console.error(error)
    }

    form.reset()
  }

  /**
 * This method takes in an id of the Todo that should be togggled as complete
 * @param {string} todoId 
 */
  toggleTodoStatus(todoId) {
    try {
      todoService.toggleTodoStatus(todoId);
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * This method takes in an id of the Todo that should be removed
   * @param {string} todoId 
   */
  removeTodo(todoId) {
    try {
      todoService.removeTodo(todoId);
    } catch (error) {
      console.error(error)
    }
  }
}