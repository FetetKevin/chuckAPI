import {ControllerAPI} from './model/controllerAPI.js'
import {Template} from './model/Template.js'

let rdnm = new ControllerAPI('https://api.chucknorris.io/jokes/random');
rdnm.fetchData().then(data => {
    let n_temp = new Template(data.value)
    n_temp.display_joke();
});

let cat_btn = new ControllerAPI('https://api.chucknorris.io/jokes/categories');
cat_btn.fetchData().then(data => {
    for(let i=0; i<data.length; i++){
        let create_btn = new Template('',data[i]);
        create_btn.create_cat_btn();
    }
});