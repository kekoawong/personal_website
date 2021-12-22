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
        html += `<img src=${tagIcons[tag]} class="skill-icon">`
    }
    return html
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
    let link = projectData["link"] || null;
    let github = projectData["github"] || null;
    let file = projectData["file"] || null;

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
                        <h3>
                            ${date ? `<i class="fa fa-calendar-check"></i> ${date}` : '' }
                        </h3>
                        <h3>
                            ${link ? `<a href="${link}" target="_blank"><i class="fa fa-chain"></i></a>` : ''}
                            ${github ? `<a href="${github}" target="_blank"><i class="fa fa-github"></a>` : ''}
                            ${file ? `<a href="${file}" target="_blank"><i class="fa fa-file"></i></a>` : ''}
                        </h3>
                    </div>
                </div>
            </div>
        </div> `;
};