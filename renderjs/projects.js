import { projectContainer } from "./projectContainer.js";

let projects = [
    {
        "title": "Unsupervised Translation",
        "explanation": "Built neural networks in PyTorch and used natural language processing principles to create an unsupervised translation system for the purpose of translating text styles without a parallel dataset.",
        "tags": ["ml", "ds", "python"],
        "date": "December 2021",
        "github": "https://github.com/kekoawong/UnsupervisedLanguageTranslation"
    },
    {
        "title": "Hume's Human Action and AI",
        "explanation": "This paper explores the contradictions that arise in Hume’s account of human action due to the moral responsibility of AI in today’s society using his ideas of liberty, necessity, and moral sentimentalism",
        "tags": ["phil", "te"],
        "date": "December 2021",
        "file": "pdf/AI-Hume.pdf"
    },
    {
        "title": "Arduino Tuner",
        "explanation": "Applying signal processing principles learned from electrical engineering courses, constructed a tuner integrating hardware elements and an algorithm with Fast Fourier Transforms and musical note identification.",
        "tags": ["sp", "c"],
        "date": "November 2021",
        "github": "https://github.com/kekoawong/ArduinoGuiterTuner"
    },
    {
        "title": "Us and AI",
        "explanation": "Authored a 30-page philosophical thesis exploring the relationship between AI and human beings, theorizing over the nature of their respective selves while proposing ethical standards.",
        "tags": ["te", "phil"],
        "date": "August 2021",
        "file": "pdf/Us_and_AI.pdf"
    },
    {
        "title": "Frontend Boilerplate",
        "explanation": "Developed a mobile boilerplate frontend with React Native using Expo, Yarn, React Navigation, and React Native Elements.",
        "tags": ["sd", "rn"],
        "date": "July 2021",
        "github": "https://github.com/kekoawong/boilerplate",
    },
    {
        "title": "CampusWayzz",
        "explanation": "Designed and developed a mobile app using a MERN stack (MongoDB, Express.js, React Native, Node.js) for college campus discovery. Utilized frontend libraries such as React Navigation and React Native Paper for a well-implemented and consistent UI.",
        "tags": ["sd", "rn"],
        "date": "April 2021",
        "github": "https://github.com/kekoawong/campuswayzz"
    },
    {
        "title": "Personal Website",
        "explanation": "Built this personal website using JavaScript, CSS, and HTML, rendering elements efficiently using JavaScript. Hosted at kekoawong.com.",
        "tags": ["sd"],
        "date": "In Progress",
        "github": "https://github.com/kekoawong/personal_website"
    },
    {
        "title": "Electrical Signals Scripts",
        "explanation": "Developed scripts for solving problems relating to electrical signals with real and imaginary parts, using libraries such as scipy and sympy.",
        "tags": ["sp", "python"],
        "date": ["February 2021"],
        "github": "https://github.com/kekoawong/eletricalSignalsScripts"
    },
    {
        "title": "Political Tweet Classifier",
        "explanation": "Utilized libraries such as pandas, sklearn, pickle, keras, tensorflow, and nltk to build classification models from decision trees, Naïve Bayes, SVMs, and neural networks to predict party affiliation of a given user.",
        "tags": ["ml", "ds", "python"],
        "date": "November 2020",
        "file": "pdf/TweetMLClassification.pdf",
        "github": "https://github.com/kekoawong/tweet_classification"
    },
    {
        "title": "Idea Center Marketplace",
        "explanation": "Prototyped marketplace for innovation lab products, using a Sharetribe Flex template and ReactJS.",
        "tags": ["sd", "rn"],
        "date": "August 2020",
        "github": "https://github.com/kekoawong/idea-marketplace"
    },
    {
        "title": "Wikipedia Parsers",
        "explanation": "Developed reusable and efficient scripts to parse large amounts of wikipedia traffic data, organizing data into compatible structures for inference scripts.",
        "tags": ["ds", "python"],
        "date": "April 2020",
        "github": "https://github.com/kekoawong/wikipedia_parsers"
    },
    {
        "title": "Ideological Control and Social Media",
        "explanation": "Surveyed censorship tactics of different nations in response to developing problems of misinformation and foreign political intereference across social media.",
        "tags": ["te"],
        "date": "May 2019",
        "file": "pdf/Ideological_Control_and_Social_Media.pdf"
    }
];

projects.forEach((p) => {
    let section = document.querySelector('#project-items');
    section.innerHTML += projectContainer(p);
});