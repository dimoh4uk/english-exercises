import "./style/app.scss";

import {App} from "./js/app";


const myApp = new App("#app");

myApp
    .init()
    .then(() => {
        console.log("is loaded");
    });

