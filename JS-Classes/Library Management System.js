class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        this.isIssued = true;
    }

    returnBook() {
        this.isIssued = false;
    }
}

const books = [
    new Book("Atomic Habits", "James Clear", "101"),
    new Book("The Alchemist", "Paulo Coelho", "102"),
    new Book("Ikigai", "Hector Garcia", "103", true),
];

console.log("Available Books:");
books.filter(b => !b.isIssued).forEach(b => console.log(b.title));
function issueByISBN(isbn) {
    const book = books.find(b => b.isbn === isbn);
    if (book && !book.isIssued) {
        book.issueBook();
        console.log(`Issued: ${book.title}`);
    } else {
        console.log("Not available");
    }
}

issueByISBN("102");
