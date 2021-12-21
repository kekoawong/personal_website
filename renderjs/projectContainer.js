

export function projectContainer(dataObject) {

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
                        <i class="fa fa-chain"></i>
                        <i class="fa fa-github"></i>
                        <i class="fa fa-file"></i>
                    </h3>
                </div>
            </div>
        </div>
    </div> `;
};