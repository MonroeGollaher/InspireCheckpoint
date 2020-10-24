import quoteService from "../Services/QuoteService.js"
import {ProxyState} from "../AppState.js"

function _drawQuotes(){
    document.getElementById("quote").innerHTML = ProxyState.quotes.QuoteTemplate
}

export default class QuoteController { 
    constructor(){
        ProxyState.on("quotes", _drawQuotes)
        quoteService.getQuotes()
    }

    getQuotes(){
        try {
            quoteService.getQuotes()
        } catch (error) {
            
        }
    }
}