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
        "title": "CampusWayzz",
        "explanation": "Designed and developed a mobile app using a MERN stack (MongoDB, Express.js, React Native, Node.js) for college campus discovery. Utilized frontend libraries such as React Navigation and React Native Paper to create a strong UI.",
        "tags": ["sd", "rn"],
        "date": "April 2021",
        "github": "https://github.com/kekoawong/campuswayzz"
    },
    {
        "title": "Political Tweet Classifier",
        "explanation": "Utilized libraries such as pandas, sklearn, pickle, keras, tensorflow, and nltk to build classification models from decision trees, Naïve Bayes, SVMs, and neural networks to predict party affiliation of a given user.",
        "tags": ["ml", "python"],
        "date": "November 2020",
        "file": "pdf/TweetMLClassification.pdf",
        "github": "https://github.com/kekoawong/tweet_classification"
    },
];

projects.forEach((p) => {
    let section = document.querySelector('#project-items');
    section.innerHTML += projectContainer(p);
});