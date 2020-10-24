import { ProxyState } from "../AppState.js";
import { api } from "../Services/AxiosService.js";
import Image from "../Models/Image.js";

let url = 'images'

//TODO create methods to retrieve data and save to the State
class ImageService {
    async getImages() {
      console.log('Image Service')
      let res = await api.get('images');
      ProxyState.image = new Image(res.data);
    }
  }

const imageService = new ImageService();
export default imageService;