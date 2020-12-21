window.onload = log_event();

async function log_event(){

    // get date and time
    var now = new Date();
    // convert date to a string CA timezone format:
    visit_time = now.toLocaleString("en-CA");

    // get referrer
    ref_link = document.referrer;

    let spreadsheet = await fetch('https://docs.google.com/spreadsheets/d/1uV8j9WUMcFx6mMDvZEvWzKz0gWNw9PXjez6bpsTxWk8/edit');
    let text = await spreadsheet.text();
    console.log(text);

    // get table
    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");
    let table = doc.getElementById("0-grid-table-container").querySelector("tbody");

    // get first row
    let i = 0;
    let table_rows = table.rows.item(i);
    let objCells = table_rows.querySelectorAll("td");
    let inputs = objCells[0].innerText;

    // increment to end of document
    while (inputs.length > 0) {
        console.log(inputs);
        i++;
        table_rows = table.rows.item(i);
        objCells = table_rows.querySelectorAll("td");
        inputs = objCells[0].innerText;
    }

    // add new referrer and time
    objCells[0].innerText = ref_link;
    objCells[1].innerText = visit_time;

}