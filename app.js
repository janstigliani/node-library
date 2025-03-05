import { question } from 'readline-sync';
import Library from './model/library.js';

console.log(`Benvenuti nella nuova ed innovativa libreria Stigliani. V0.2\n\n`);

const library = new Library(`Stigliani`)
console.log(library);

function addUser(params) {
    
}

function addBook(params) {
    
}

function removeUser(params) {
    
}

function removeBook(params) {
    
}

function listUsers(params) {
    
}

function listBooks(params) {
    
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
console.log(`L'utente ha scelto la funzionalita' numero: ${answer}`);

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
        ReturnBook()
        break;
        case `9`:
            process.exit(0);
        break;

    default:
        console.log(`Scelta non valida!`)
        break;
}
}


// if (answer == 1) {
//     id += 1;
//     const questionName = `Inserisci il tuo nome: `;
//     const name = f1.question(questionName)
//     console.log(`L'utente si chiama: ${name}`);
//     const user = new User(`${userName}`, id);
//     console.log(user);
// };