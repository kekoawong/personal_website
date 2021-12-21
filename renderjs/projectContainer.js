

export function projectContainer(projectData) {

    // set default values
    let heading = dataObject["heading"] || '';
    let subheading = dataObject["subheading"] || '';
    let link = dataObject["link"] || '#';
    let logo = dataObject["logo"] || '#';
    let location_html = dataObject["location"] ? `<h5><i class="fa fa-map-marker" aria-hidden="true"></i> ${dataObject["location"]}</h5>` : '';
    let listItems = dataObject["listItems"] || [];
    let bottomInfo = dataObject["bottomInfo"] || [];
    let buttons = dataObject["buttons"] || '';

    let link = projectData["link"] || null;
    let github = projectData["github"] || null;
    let file = projectData["file"] || null;

    return `
        <div class="col-md-4 col-sm-6  engineering">
            <div class="portfolio_item">
                <img src="img/blank.png" alt="image" class="img-responsive" />
                <div class="portfolio-overlay">
                    <div class="portfolio-icons">
                        <img src="img/icons/design.png" class="skill-icon">
                        <i class="fa fa-envelope"></i>
                        <i class="fa fa-github"></i>
                        <i class="fa fa-facebook"></i>
                    </div>
                    <div class="portfolio-text">
                        <h2><strong>Title</strong></h2>
                        <p>Explanation</p>
                    </div>
                    <div class="portfolio-bottom">
                        <h3><i class="fa fa-calendar-check"></i> date</h3>
                        <h3>
                            <a href="https://github.com/" target="_blank"><i class="fa fa-chain"></i></a>
                            <a href="https://github.com/" target="_blank"><i class="fa fa-github"></i></i></a>
                            <a href="https://github.com/" target="_blank"><i class="fa fa-file"></i></a>
                        </h3>
                    </div>
                </div>
            </div>
        </div> `;
};