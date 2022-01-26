import { ControllerAPI } from "./controllerAPI.js";

export class Template {
    constructor(joke, cat = "Blague random"){
        this.cat = cat;
        this.joke = joke;
    }
    display_joke(){
        if(document.querySelector('.joke_box')){
            document.querySelector('.joke_box').remove();
        }
        let section = document.querySelector('#jokes');
        let div = document.createElement('div');
        div.classList.add('joke_box');
        div.innerHTML = `<h1>${this.cat}</h1>
                        <p>${this.joke}</p>`;
        section.appendChild(div); 
    }
    create_cat_btn(){
        let section = document.querySelector('#cat_list');
        let btn = document.createElement('button');
        btn.classList.add('cat_btn');
        btn.value = this.cat;
        btn.innerHTML = this.cat;
        section.appendChild(btn)
        btn.addEventListener('click', (event)=>{
            let ctrl_api = new ControllerAPI(`https://api.chucknorris.io/jokes/random?category=${event.target.value}`);
            ctrl_api.fetchData()
            .then(data => {
                this.joke = data.value;
                this.display_joke();
            })     
        })
    }
}