export class Image{
    private size:string
    private text:string
    constructor(size:string, text:string){
        this.size = size
        this.text = text
    }
    public getImageURL(){
        return this.text
    }
}