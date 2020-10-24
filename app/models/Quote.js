export default class Quote {
    constructor(data){
        this.body = data.body
        this.id = data.id
        this.url = data.url
        this.author = data.author
    }

    get QuoteTemplate() {
        return /*html*/`
        <blockquote class="blockquote">
            <p class="text-light">
                ${this.body} 
            </p>
            <footer class="blockquote-footer">
                <p class="text-light">-${this.author}</p>
            </footer>
        </blockquote>
        `
      }
}