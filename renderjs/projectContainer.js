function generateTags(tags) {
    /*
        will take a list of tags
        Supported Values: 
            ml (Machine Learning) 
            phil (philosophy)
            sd (Software Development)
            python
            rn (React Native)
            te (Technology Ethics)
    */
    let tagIcons = {
        "ml": "img/icons/ml.png",
        "phil": "img/icons/ethical.png",
        "sd": "img/icons/software.png",
        "python": "img/icons/python.png",
        "rn": "img/icons/react.png",
        "te": "img/icons/agency.png"
    }
    let html = ''
    for (let tag of tags){
        if (tag in tagIcons){
            html += `<img src=${tagIcons[tag]} class="skill-icon">`;
        }
    }
    return html;
}


export function projectContainer(projectData) {
    /*
        Pass in object with the following values:
            {
                "title": string
                "explanation": string
                "tags": list of strings of tags
                    Supported Values: 
                        ml (Machine Learning) 
                        phil (philosophy)
                        sd (Software Development)
                        python
                        rn (React Native)
                        te (Technology Ethics)
                        design
                "date": string of completed date
                "link": string with link
                "github": string with link to github
                "file": string link to file
            }
    */

    // set default values
    let title = projectData["title"] || '';
    let explanation = projectData["explanation"] || '';
    let tags = projectData["tags"] || [];

    let date = projectData["date"] || null;
    let link = projectData["link"] ? `<a href="${projectData["link"]}" target="_blank"><i class="fa fa-chain"></i></a>` : '';
    let github = projectData["github"] ? `<a href="${projectData["github"]}" target="_blank"><i class="fa fa-github "></i></a>` : '';
    let file = projectData["file"] ? `<a href="${projectData["file"]}" target="_blank"><i class="fa fa-file"></i></a>` : '';

    console.log(github);
    return `
        <div class="col-md-4 col-sm-6  ${tags.join(' ')}">
            <div class="portfolio_item">
                <img src="img/blank.png" alt="image" class="img-responsive" />
                <div class="portfolio-overlay">
                    <div class="portfolio-icons">
                        ${generateTags(tags)}
                    </div>
                    <div class="portfolio-text">
                        <h2><strong>${title}</strong></h2>
                        <p>${explanation}</p>
                    </div>
                    <div class="portfolio-bottom">
                        <h5>
                            ${date ? `<strong><i class="fa fa-calendar-check"></i> ${date}</strong>` : '' }
                        </h5>
                        <h2>
                        ${link}
                        ${github}
                        ${file}
                        </h2>
                    </div>
                </div>
            </div>
        </div> `;
};