export default class Image {
    constructor(data){
        this.id = data.id
        this.url = data.url
        this.largeUrl = data.large_url
        this.source_id = data.source_id
        this.copyright = data.copyright
        this.site = data.site
    }

    get Template(){
        return /*html*/`
            <style>
            body {
                background-image: ${this.url};
            }
            </style>
        `
    }
}