import imageService from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";

function _drawImage() {
    document.body.style.backgroundImage = `url(${ProxyState.image.url})`;  
}


//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController { 
    constructor(){
        ProxyState.on("image", _drawImage)
        this.getImages()
    }

    getImages(){
        try {
            imageService.getImages()
        } catch (error) {
            
        }
    }
}