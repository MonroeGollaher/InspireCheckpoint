import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Image from "../Models/Image.js";

let url = 'images'

//TODO create methods to retrieve data and save to the State
class ImageService {
    async getImages(){
        let res = await api.get(url)
        ProxyState.images = res.data.data.map(i => new Image(i))
        console.log("getting images")
    }
}

const imageService = new ImageService();
export default imageService;