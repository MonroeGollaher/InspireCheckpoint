export default class Quote {
    constructor(data){
        this.body = data.body
        this.id = data.id
        this.url = data.url
        this.author = data.author
    }

    get QuoteTemplate() {
        return /*html*/`
        <h5>${this.body}</h5>
        <h6>${this.author}</h6>
        `
      }
}