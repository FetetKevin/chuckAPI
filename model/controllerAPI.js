export class ControllerAPI {
    constructor(url){
        this.url = url;
    }
    fetchData(){
        return fetch(this.url).then(r => r.json())
    }
}