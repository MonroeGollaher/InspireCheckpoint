import imageService from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";

function _drawImage(){
    let template = ""
    let image = ProxyState.images
    image.forEach(i = template += i.Template)
    document.body.innerHTML = template
}


//TODO Create methods for constructor, and rendering the image to the page
//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
export default class ImageController { 
    constructor(){
        ProxyState.on("images", _drawImage)
        imageService.getImages()
    }
}