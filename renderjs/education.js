import { container } from "./container.js";

let education = [
    {
        "heading": "Del Oro High School",
        "subheading": "2014 - 2018 | GPA: 4.31",
        "link": "https://sites.google.com/puhsd.k12.ca.us/delorohigh/home",
        "logo": "img/del_oro.jpeg",
        "location": "Loomis, California, USA",
        "listItems": ["Graduated Magna Cum Laudee and honored with a class rank of 5/429.",
                        "Awarded Math Department Award for exhibiting an extended curiosity and in-depth understanding of mathematics.",
                        "3-year varsity athlete in both basketball and tennis."
                    ],
        "bottomInfo": {"Honors and Awards:": "California Scholarship Federation, National Honors Society, National Merit Commended Scholar, Del Oro Parents' Club Scholarship, Society of American Military Engineers Scholarship."}
    } 
];

education.forEach((e) => {
    let section = document.querySelector('#education');
    section.innerHTML += container(e);
});
