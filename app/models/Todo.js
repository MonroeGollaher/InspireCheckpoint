export default class Todo {
  constructor(data) {
    this.description = data.description;
    this.id = data._id
    this.completed = data.completed
  }

  get Template(){
    return /*html*/`
      <div class="row">
        <div class="card col-4" style="width: 18rem;">
          <ul class="list-group list-group-flush">
              <li class="list-group-item">${this.description}<button class="text-danger close" onclick="app.todoController.removeTodo('${this.id}')"><i class="fas fa-backspace"></i></button></li>
          </ul>
        </div>
      </div>
      
    `

  }
}

