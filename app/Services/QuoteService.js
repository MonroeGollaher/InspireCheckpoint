import { ProxyState } from "../AppState.js"
import Quote from "../models/Quote.js"
import { api } from "./AxiosService.js";

let url = 'quotes'

class QuoteService {

  async getQuote() {
    console.log("hello from quote service");
    let res = await api.get(url);
    ProxyState.quotes = new Quote(res.data.quote);
  }
}

const quoteService = new QuoteService();
export default quoteService;
