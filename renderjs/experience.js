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
        "buttons": {"Apple Store": "https://apps.apple.com/us/app/eventurely/id1490342315",
                    "Google Play": "https://play.google.com/store/apps/details?id=com.arrix.eventurely&hl=en_US&gl=US",
                    "LinkedIn": "https://www.linkedin.com/company/eventurely/",
                    "Facebook": "https://www.facebook.com/eventurely.app.1",
                    "Instagram": "https://www.instagram.com/_eventurely_/"
                    }
    } 
];

experience.forEach((e) => {
    let section = document.querySelector('#experience');
    section.innerHTML += container(e);
});