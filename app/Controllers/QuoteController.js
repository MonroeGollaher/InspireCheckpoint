import quoteService from "../Services/QuoteService.js"
import {ProxyState} from "../AppState.js"

function _drawQuotes(){
    // let template = ""
    // let newQuote = ProxyState.quotes
    // newQuote.forEach(q => template += q.QuoteTemplate)
    // document.getElementById("quote").innerHTML = template
}

export default class QuoteController { 
    constructor(){
        ProxyState.on("quotes", _drawQuotes)
        quoteService.getQuote()
    }
}