import { container } from "./container.js";

let DO = {
    "heading": "Del Oro High School",
    "subheading": "2014 - 2018 | GPA: 4.31 | Class Rank: 5/429",
    "link": "https://sites.google.com/puhsd.k12.ca.us/delorohigh/home",
    "logo": "img/del_oro.jpeg",
    "location": "Loomis, California, USA",
    "listItems": ["Graduated Magna Cum Laudee and honored with scholarships from the Del Oro Parents' Club and the Society of American Military Engineers.",
                    "Awarded Math Department Award for exhibiting an extended curiosity and in-depth understanding of mathematics.",
                    "3-year varsity athlete in both basketball and tennis."
                ]
}

let section = document.querySelector('#education');
section.innerHTML += container(DO);