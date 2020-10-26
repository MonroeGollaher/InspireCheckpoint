export default class Quote {
    constructor(data){
        this.body = data.body
        this.id = data.id
        this.url = data.url
        this.author = data.author
    }

    get QuoteTemplate() {
        return /*html*/`
        <div class="row justify-content-center">
            <blockquote class="blockquote">
                <p class="lead text-light">${this.body}</p>
                <p class="lead text-light">-${this.author}</p>
            </blockquote>
        </div>
        
        `
      }
}
