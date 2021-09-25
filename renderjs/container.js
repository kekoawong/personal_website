function createListItems(items) {
    // Must be in a list form
    let html = '';
    for (let i of items) {
        html += `<li>${i}</li>`;
    }
    return html;
}

function createBottomInfo(info) {
    // Must be in for of a list of dictionaries
    // { Bolded idea: Stuff }
    let html = '';
    for (const [key, value] of Object.entries(info)) {
        html += `<p><strong>${key}</strong>${value}</p>`;
    }
    return html;
}

function createButtons(info) {
    // Must be in for of a list of dictionaries
    // { Button Title: link }
    let html = '';
    for (const [key, value] of Object.entries(info)) {
        html += `<button onclick="window.open('${value}','_blank')"><strong>${key}</strong></button>`;
    }
    return html;
}

export function container(dataObject) {
    /*
        Pass in object with the following values minimum:
            {
                "heading": string
                "subheading": string
                "link": string
                "logo": string
                "location": string
                "listItems": list of string sentences
                "bottomInfo": list of dictionaries in form { Bolded idea: Sentence }
                "buttons": list of dictionaries in form { Button Title: link }
            }
    */
    
    // set default values
    let heading = dataObject["heading"] || '';
    let subheading = dataObject["subheading"] || '';
    let link = dataObject["link"] || '#';
    let logo = dataObject["logo"] || '#';
    let location_html = dataObject["location"] ? `<h5><i class="fa fa-map-marker fa-large" aria-hidden="true"></i>${dataObject["location"]}</h5>` : '';
    let listItems = dataObject["listItems"] || [];
    let bottomInfo = dataObject["bottomInfo"] || [];
    let buttons = dataObject["buttons"] || '';

    return `
        <div class="info-container">
            <div class="info-header">
                <div class="info-logo">
                    <a href="${link}" target="_blank"><img src="${logo}"></a>
                </div>
                <div class="info-header-text">
                    <h3><a href="${link}" target="_blank">${heading}</a></h3>
                    ${location_html}
                    <p>${subheading}</p>
                </div>
            </div>
            <div class="info-info">
                <ul>
                    ${createListItems(listItems)}
                </ul>
                <div>
                    ${createBottomInfo(bottomInfo)}
                </div>
                <div class="info-links">
                    ${createButtons(buttons)}
                </div>
            </div>
        </div>`;
};