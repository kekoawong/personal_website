function make_book(title, author, link) {
    return `
    <button class="book" onclick="window.open('${link}','_blank')">
        <div class="book-title">
            ${title}
        </div>
        <p>by ${author}</p>
    </button>
    `
}

function create_books(books) {
    let bookshelf = document.querySelector('.book-holder');
    let html = ''
    for (let b of books) {
        html += make_book(b[0], b[1], b[2]);
    }
    bookshelf.innerHTML = html;
}

let books = [
    ["The Book of Joy", "The Dalai Lama and Archbishop Desmond Tutu", "https://www.goodreads.com/book/show/29496453-the-book-of-joy"],
    ["Finance and the Good Society", "Robert J. Shiller", "https://www.goodreads.com/book/show/13384575-finance-and-the-good-society"],
    ["Tattoos on the Heart", "Gregory Boyle", "https://www.goodreads.com/book/show/7090193-tattoos-on-the-heart"],
    ["Just Mercy", "Bryan Stevenson", "https://www.goodreads.com/book/show/20342617-just-mercy"],
    ["Beginning Entrepreneurship 2.0", "Jim Collins and Bill Lazier", "https://www.goodreads.com/book/show/55270310-be-2-0-beyond-entrepreneurship-2-0?from_search=true&from_srp=true&qid=XWCoC3EJ6Y&rank=5"],
    ["Man's Search for Meaning", "Viktor E. Frankl", "https://en.wikipedia.org/wiki/Man%27s_Search_for_Meaning"],
    ["Nudge", "Richard Thaler and Cass Sunstein", "https://en.wikipedia.org/wiki/Nudge_%28book%29"],
    ["The Promise of a Pencil", "Adam Braun", "https://www.goodreads.com/book/show/19598139-the-promise-of-a-pencil"],
    ["The Story of My Experiments with Truth", "Mahatma Gandhi", "https://www.goodreads.com/book/show/112803.Gandhi"],
    ["When Breath Becomes Air", "Paul Kalanithi", "https://en.wikipedia.org/wiki/When_Breath_Becomes_Air"],
    ["The Emotion Machine", "Marvin Minsky", "https://en.wikipedia.org/wiki/The_Emotion_Machine"]
];

create_books(books);

