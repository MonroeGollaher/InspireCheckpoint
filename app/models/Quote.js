export default class Quote {
    constructor(data){
        this.quote = data.quote.url
    }

    get Template(){
        return /*html*/`
          <div class="card col-4">
            <h4>${this.quote}</h4>
          </div>
        `
    }
}