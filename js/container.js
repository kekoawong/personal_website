function createListItems(items) {
    // Must be in a list form
    html = '';
    for (let i in items) {
        html += `<li>${i}</li>`;
    }
    return html;
}

function createBottomInfo(info) {
    // Must be in for of a list of dictionaries
    // { Bolded idea: Stuff }
    html = '';
    for (const [key, value] of Object.entries(info)) {
        html += `<p><strong>${key}</strong>${value}</p>`;
    }
    return html;
}

function createButtons(info) {
    // Must be in for of a list of dictionaries
    // { Button Title: link}
    html = '';
    for (const [key, value] of Object.entries(info)) {
        html += `<button onclick="window.open('${value}','_blank')"><strong>${key}</strong></button>`;
    }
    return html;
}

export function container(title, author, link) {
    return `
        <div class="info-container">
            <div class="info-header">
                <div class="info-logo">
                    <a href="${link}" target="_blank"><img src="${logo}"></a>
                </div>
                <div class="info-header-text">
                    <h3><a href="${link}" target="_blank">${heading}</a></h3>
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