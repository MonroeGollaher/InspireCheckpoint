export default class Todo {
  constructor(data) {
    this.description = data.description;
    this.id = data._id
    this.completed = data.completed
  }

  get Template(){
    
    if(this.completed){
      return /*html*/`
    <div class="row align-items-center">
      <div class="col-8">
          <li class="completed ">- </i> ${this.description}</li>    
      </div>
      <div class="col-1">
        <button class="btn border-0 bg-transparent"><i class="fas fa-check fa-xs" onclick="app.todoController.toggleTodoStatus('${this.id}')"></i></button>
      </div>
      <div class="col-1">
        <button class="btn border-0 bg-transparent"><i class="fas fa-trash fa-xs" onclick="app.todoController.removeTodo('${this.id}')"></i></button>
      </div>
    </div>
    `
    } else {
      return /*html*/`
    <div class="row align-items-center">
      <div class="col-8">
          <li class="">- </i> ${this.description}</li>    
      </div>
      <div class="col-1">
        <button class="btn border-0 bg-transparent"><i class="fas fa-check fa-xs" onclick="app.todoController.toggleTodoStatus('${this.id}')"></i></button>
      </div>
      <div class="col-1">
        <button class="btn border-0 bg-transparent"><i class="fas fa-trash fa-xs" onclick="app.todoController.removeTodo('${this.id}')"></i></button>
      </div>
    </div>
    `
    }
  }
}

