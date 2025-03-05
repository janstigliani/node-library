import { question } from 'readline-sync';
import Library from './model/library.js';
import User from "./model/user.js";
import { PhysicalBook, EBook } from "./model/book.js";

const library = new Library(`Stigliani`)

let id = 0;

console.log(`\nBenvenuti nella nuova ed innovativa libreria Stigliani.\n`);

function addUser() {

    const questionName = `Inserisci il tuo nome: `;
    const name = question(questionName)
    const user = new User(id, `${name}`);

    id += 1;

    library.addUser(user);
    console.log(`L'utente ${name} e' stato aggiunto con successo!`);
}

function removeUser() {
    const questionID = `Inserisci l'ID dell'utente che desideri eliminare: `;
    const userID = question(questionID);
    const user = new User(userID, '');

    library.removeUser(user);
    console.log(`L'utente e' stato rimosso con successo!`);
}

function physicBookAdd(isbn, title, author) {
    const questionShelfLocation = `Inserisci la sua posizione nello scaffale: `;
    const shelfLocation = question(questionShelfLocation);
    const physicalBook = new PhysicalBook(isbn, title, author, shelfLocation);
    library.addBook(physicalBook);
}

function eBookAdd(isbn, title, author) {
    const questionFileFormat = `Inserisci il formato dell'e-book: `;
    const fileFormat = question(questionFileFormat);
    const eBook = new EBook(isbn, title, author, fileFormat);
    library.addBook(eBook);
}

function addBook() {
    const questionISBN = `Inserisci il codice ISBN del libro: `;
    const bookISBN = question(questionISBN);
    const questionTitle = `Inserisci il titolo del libro: `;
    const bookTitle = question(questionTitle);
    const questionAuthor = `Inserisci l'autore del libro: `;
    const bookAuthor = question(questionAuthor);

    while (true) {
        const questionCondition = `Il libro e' fisico o digitale? `;
        const condition = question(questionCondition);
        switch (condition) {
            case `fisico`:
                physicBookAdd(bookISBN, bookTitle, bookAuthor);
                console.log(`Il libro fisico e' stato aggiunto con successo!`);
                return;
            case `digitale`:
                eBookAdd(bookISBN, bookTitle, bookAuthor);
                console.log(`L'e-book e' stato aggiunto con successo!`);
                return;
            default:
                console.log(`Scelta non valida!`);
        }
    }
}

function removeBook() {
    const questionISBN = `Inserisci l'ISBN del libro che desideri eliminare: `;
    const bookISBN = question(questionISBN);
    const bookToRemove = new PhysicalBook(bookISBN, '', '', '');

    library.removeBook(bookToRemove);
    console.log(`Il libro e' stato rimosso con successo!`);
}

function listUsers() {
    library.listUsers();
}

function listBooks() {
    library.listBooks();
}

function borrowBook() {
    const questionUserID = `Inserisci l'ID dell'utente che desidera prendere in prestito un libro: `;
    const userID = parseInt(question(questionUserID));

    const userIndex = library.users.findIndex(user => user.id === userID);

    if (userIndex !== -1) {

        const user = library.users[userIndex];

        const questionBookISBN = `Inserisci l'ISBN del libro che desidera prendere in prestito: `;
        const bookISBN = question(questionBookISBN);

        const bookIndex = library.books.findIndex(book => book.isbn === bookISBN);

        if (bookIndex !== -1) {
            const book = library.books[bookIndex];
            library.borrowBook(user, book);
        } else {
            console.log(`Il libro non e' disponibile in catalogo!`);
        }
    } else {
        console.log(`L'utente non e' presente in archivio!`);
    }
}

function returnBook() {
    const questionUserID = `Inserisci l'ID dell'utente che desidera ritornare dal prestito un libro: `;
    const userID = parseInt(question(questionUserID));

    const userIndex = library.users.findIndex(user => user.id === userID);

    if (userIndex !== -1) {

        const user = library.users[userIndex];

        const questionBookISBN = `Inserisci l'ISBN del libro che desidera ritornare dal prestito: `;
        const bookISBN = question(questionBookISBN);

        const bookIndex = library.books.findIndex(book => book.isbn === bookISBN);

        if (bookIndex !== -1) {
            const book = library.books[bookIndex];
            library.returnBook(user, book);
        } else {
            console.log(`Nessuna corrispondeza trovata!`);
        }
    } else {
        console.log(`L'utente non e' presente in archivio!`);
    }
}

while (true) {
    const introString = `Ti presentiamo le nostre funzionalita':
                    \n1)aggiungi utente 
                    \n2)rimuovi utente
                    \n3)aggiungi libro
                    \n4)rimuovi libro
                    \n5)visualizza lista utenti
                    \n6)visualizza lista libri
                    \n7)presta libro
                    \n8)restituisci libro
                    \n9)esci
                    \n
                    \nScegli il numero della funzionalita': `;


    const answer = question(introString);

    switch (answer) {
        case `1`:
            addUser()
            break;
        case `2`:
            removeUser()
            break;
        case `3`:
            addBook()
            break;
        case `4`:
            removeBook()
            break;
        case `5`:
            listUsers()
            break;
        case `6`:
            listBooks()
            break;
        case `7`:
            borrowBook()
            break;
        case `8`:
            returnBook()
            break;
        case `9`:
            process.exit(0);
            break;

        default:
            console.log(`Scelta non valida!`)
            break;
    }
}