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
        html += `<p><strong>${key} </strong>${value}</p>`;
    }
    return html;
}

function createButtons(info) {
    /*
        Must have icons for buttons

        Must be in format:
            {ButtonTitle: [link, icon]}

        Where icon is the name of the font awesome icon
        i.e. fa-link would just be link
        link is the default icon if icon is not specified

    */

    let icons = {
        "link": "fa-link",
        "person": "fa-user",
        "dep": "fa-building",
        "file": "fa-file-text",
        "apple": "fa-apple",
        "android": "fa-android",
    };

    let html = '';
    let icon = '';
    let fa = 'link';
    for (const [key, value] of Object.entries(info)) {
        fa = value[1] ? value[1] : 'link';
        icon = `<i class="fa fa-${fa} "></i>`;
        html += `<button onclick="window.open('${value[0]}','_blank')">${icon} <strong> ${key}</strong></button>`;
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
                "bottomInfo": dictionary with keys and values that will correspond to { Bolded idea: Sentence }
                "buttons": dictionary with keys and values that will correspond to { Button Title: link }
            }
    */
    
    // set default values
    let heading = dataObject["heading"] || '';
    let subheading = dataObject["subheading"] || '';
    let link = dataObject["link"] || '#';
    let logo = dataObject["logo"] || '#';
    let location_html = dataObject["location"] ? `<h5><i class="fa fa-map-marker" aria-hidden="true"></i> ${dataObject["location"]}</h5>` : '';
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