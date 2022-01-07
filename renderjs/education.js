import { container } from "./container.js";

let education = [
    {
        "heading": "University of Notre Dame",
        "subheading": "2018-2022 | GPA: 3.82",
        "link": "https://www.nd.edu/",
        "logo": "img/nd_logo.png",
        "location": "Notre Dame, Indiana, USA",
        "listItems": ["Pursuing a BS from the College of Engineering with majors in Computer Engineering and Philosophy.",
                        "5x Dean's List for College of Engineering."
                    ],
        "bottomInfo": {"Philosophy Coursework:": 
                        "Philosophy of Music, Ethics and Policy in Technology Management, Game Theory, Simulating Politics and Foreign Affairs, Science and Social Values, Ancient and Medieval Philosophy, Justice Seminar, Censorship and Propaganda, Formal Logic, Ethics and Politics, Modern Philosophy.",
                    "Engineering Coursework:": "AI and Social Good, Natural Language Processing, Data Structures, Data Science, Databases, Operating Systems, Computer Architecture, Electrical Signals and Systems, Electrical Circuits.",
                    "Research Experience:": "Social Media Misinformation (2 semesters with Dr. Tim Weninger), Citation Gap Modeling (1 semester with Dr. Hannah Rubin), Data Visualization (1 semester with Dr. Chaoli Wang), Data Science Sports Team Ratings (1 semester with Dr. Meng Jiang)"
                },
        "buttons": {"Dr. Tim Weninger": ["https://timweninger.com/", "user"],
                "Dr. Hannah Rubin": ["http://www.hannahrubin.net/", "user"],
                "Dr. Chaoli Wang": ["http://sites.nd.edu/chaoli-wang/", "user"],
                "Dr. Meng Jiang": ["http://www.meng-jiang.com/", "user"],
                "Philosophy": ["https://philosophy.nd.edu/", "building"],
                    "Computer Science and Engineering": ["https://cse.nd.edu/", "building"],
                }
    },
    {
        "heading": "Del Oro High School",
        "subheading": "2014 - 2018 | GPA: 4.31",
        "link": "https://sites.google.com/puhsd.k12.ca.us/delorohigh/home",
        "logo": "img/del_oro.jpeg",
        "location": "Loomis, California, USA",
        "listItems": ["Graduated with a class rank of 5/429.",
                        "Awarded Math Department Award for exhibiting an extended curiosity and in-depth understanding of mathematics.",
                        "3-year varsity athlete in both basketball and tennis."
                    ],
        "bottomInfo": {"Honors and Awards:": "California Scholarship Federation, National Honors Society, National Merit Commended Scholar, Del Oro Parents' Club Scholarship."}
    } 
];

education.forEach((e) => {
    let section = document.querySelector('#education');
    section.innerHTML += container(e);
});
