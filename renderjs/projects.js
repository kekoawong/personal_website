import { projectContainer } from "./projectContainer.js";

let projects = [
    {
        "title": "Unsupervised Translation",
        "explanation": "Built neural networks in PyTorch and used natural language processing principles to create an unsupervised translation system for the purpose of translating text styles without a parallel dataset.",
        "tags": ["ml", "python"],
        "date": "December 2021",
        "github": "https://github.com/kekoawong/UnsupervisedLanguageTranslation"
    },
    {
        "title": "Us and AI",
        "explanation": "Authored a 30-page philosophical thesis exploring the relationship between AI and human beings, theorizing over the nature of their respective selves while proposing ethical standards.",
        "tags": ["te", "phil"],
        "date": "August 2021",
        "file": "pdf/Us_and_AI.pdf"
    },
    {
        "title": "Mobile Boilerplate",
        "explanation": "Developed a boilerplate mobile frontend with React Native and libraries such as React Navigation.",
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
        "explanation": "Built this personal website using JavaScript, CSS, and HTML. Hosted at kekoawong.com.",
        "tags": ["sd"],
        "date": "In Progress",
        "github": "https://github.com/kekoawong/personal_website"
    },
    {
        "title": "Political Tweet Classifier",
        "explanation": "Utilized libraries such as pandas, sklearn, pickle, keras, tensorflow, and nltk to build classification models from decision trees, Naïve Bayes, SVMs, and neural networks to predict party affiliation of a given user.",
        "tags": ["ml", "python"],
        "date": "November 2020",
        "file": "pdf/TweetMLClassification.pdf",
        "github": "https://github.com/kekoawong/tweet_classification"
    },
    {
        "title": "Idea Center Marketplace",
        "explanation": "Prototyped marketplace for innovation lab products, using Sharetribe Flex and ReactJS.",
        "tags": ["sd", "rn"],
        "date": "August 2020",
        "github": "https://github.com/kekoawong/idea-marketplace"
    },
    {
        "title": "Wikipedia Parsers",
        "explanation": "Developed reusable and efficient scripts to parse large amounts of wikipedia traffic data, organizing data into compatible structures for inference scripts.",
        "tags": ["python"],
        "date": "April 2020",
        "github": "https://github.com/kekoawong/wikipedia_parsers"
    }
];

projects.forEach((p) => {
    let section = document.querySelector('#project-items');
    section.innerHTML += projectContainer(p);
});