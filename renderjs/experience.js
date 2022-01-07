import { container } from "./container.js";

let experience = [
    {
        "heading": "Project Leader and Frontend Developer",
        "location": "Virtual",
        "subheading": "Eventurely",
        "link": "https://www.linkedin.com/company/eventurely/",
        "logo": "img/eventurely-logo.png",
        "listItems": ["Managed a diverse 10-person team of designers, developers and business strategists to develop and launch a mobile app and engaged with multiple stakeholders through hands-on development of a business model, identifying and formulating a target market, and creating/executing a project plan.",
                        "Organized collaborative workflow between designers and developers, structuring the ideation process while emphasizing open communication.",
                        "Exhibited multidimensional skills by also being the main frontend architect and developer of the calendar screens and various other components, implementing modern native mobile libraries and techniques.",
                        "Displayed strong leadership and an authentic vision by employing philosophical background to formulate ethical design and business standards that laid the foundation of the team’s values and work dynamics.",
                        "Awarded $2.5k in funding and was offered a spot into LookUp’s leadership lab after carefully designing and successfully pitching a solution to digital wellbeing and humane technology."
                    ],
        "bottomInfo": {"Tech:": "React Native, JavaScript, Firebase, NodeJS, MobX, React Navigation, Hooks, Git, Expo, Yarn"},
        "buttons": {"Apple Store": ["https://apps.apple.com/us/app/eventurely/id1490342315"],
                    "Google Play": ["https://play.google.com/store/apps/details?id=com.arrix.eventurely&hl=en_US&gl=US", "android"],
                    "LinkedIn": ["https://www.linkedin.com/company/eventurely/"],
                    "Facebook": ["https://www.facebook.com/eventurely.app.1",],
                    "Instagram": ["https://www.instagram.com/_eventurely_/", "instagram"]
                    }
    },
    {
        "heading": "Jr. Software Engineer in Startup Business Intelligence",
        "location": "Virtual",
        "subheading": "The Idea Center",
        "link": "https://ideacenter.nd.edu/",
        "logo": "img/idea_center.jpg",
        "listItems": ["Designed, implemented, and tested listings and product details page for innovation lab’s online marketplace.",
                        "Conducted extensive research into compatible marketplace repositories to use as a foundation for the project and inspected documentation and code while presenting findings to the project manager."
                    ],
        "bottomInfo": {"Tech:": "ReactJS, JavaScript, HTML, CSS, Bootstrap, Yarn, NodeJS, Sharetribe FLEX"},
        "buttons": {"Repository": ["https://github.com/jaeyoungchang5/idea-marketplace", "github"],
                    "Website": ["https://ideacenter.nd.edu/"]
                    }
    },
    {
        "heading": "Social Media Misinformation Research",
        "location": "Notre Dame, Indiana, USA",
        "subheading": "Dr. Tim Wenginer | University of Notre Dame",
        "link": "https://timweninger.com/",
        "logo": "img/nd_logo.png",
        "listItems": ["Self-taught and carefully learned to write scalable code for large data sets that would operate efficiently and safely with memory on shared resources, creating models of topic activity scraped from online traffic.",
                        "Authorized to conduct multi-core computational programs with Notre Dame’s Center for Research Computing on machines shared with professors and PhD students."
                    ],
        "bottomInfo": {"Tech:": "Python, Parallel Computing, Data Science, Pickle, JSON, Git, Bash, Parsing, Machine Learning"},
        "buttons": {"Repository": ["https://github.com/kekoawong/wikipedia_parsers", "github"],
                    "Professor's Website": ["https://timweninger.com/", "user"]
                    }
    },
    {
        "heading": "Data Visualization Toolkit Developer",
        "location": "Notre Dame, Indiana, USA",
        "subheading": "Dr. Chaoli Wang | University of Notre Dame",
        "link": "https://sites.nd.edu/chaoli-wang/",
        "logo": "img/nd_logo.png",
        "listItems": ["Embraced a fast-paced environment and learning on the go, self-teaching technical skills and researching solutions in order to ship well-written and efficient software while fulfilling deadlines.",
                        "Transformed the entire code base into a simplified restructured format which greatly improved the product testing process while also alleviating the code complexity overhead for all team members.",
                        "Published as a contributor to the educational software toolkit, which is currently being used in the curriculum of an upper-level undergraduate/graduate course on data visualization at the University of Notre Dame."
                    ],
        "bottomInfo": {"Tech:": "JavaScript, D3.js, HTML, CSS, Git, Bash, JSON, Data Visualizations, Graph Networks"},
        "buttons": {"GraphVisual": ["https://www3.nd.edu/~cwang11/graphvisual/"],
                    "Publication": ["https://www3.nd.edu/~cwang11/research/asee20-graphvisual.pdf"],
                    "Repository": ["https://github.com/mimre25/graph-visual"],
                    "Professor's Website": ["https://sites.nd.edu/chaoli-wang/"]
                    }
    },
];

experience.forEach((e) => {
    let section = document.querySelector('#experience');
    section.innerHTML += container(e);
});