import { projectContainer } from "./projectContainer.js";

let projects = [

];

projects.forEach((p) => {
    let section = document.querySelector('#projects');
    section.innerHTML += container(p);
});