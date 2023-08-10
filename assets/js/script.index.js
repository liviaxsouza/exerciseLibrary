class Book {
    constructor (title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }    
}
class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.arrayBooks = [];
    }

    getBook(book){
     this.arrayBooks.push(book);

    }
}

class Library {
    constructor () {
        this.libraryBooks = [];
        this.libraryPeople = [];
    }

    addBook(book) {
        this.libraryBooks.push(book);
    }

    addPerson(person) {
        this.libraryPeople.push(person);
    }
}

const biblioteca = new Library();

const book1 = new Book ('Percy Jackson', 'Ricky Riordan', 280);
const book2 = new Book ('A vida invisível de Addie LaRue', 'V.E Schwab', 507);
const book3 = new Book ('Cool for the Summer', 'Dahlia Adler', 326);
const book4 = new Book ('Verity', 'Colleen Hoover', 320);
const book5 = new Book ('Diário de Um Banana', 'Jeff Kinney', 145);
const book6 = new Book ('De Lukov... Com Amor', 'Mariana Zapata', 528);
const book7 = new Book ('A Mecânica do Amor', 'Alexene Farol Follmuth', 329);
const book8 = new Book ('O Ceifador', 'Neal Shusterman', 448);
const book9 = new Book ('Quebrando o Gelo', 'Hannah Grace', 368);
const book10 = new Book ('Six of Crowns', 'Leigh Bardugo', 376);
const book11 = new Book ('Vermelho, Branco e Sangue Azul', 'Casey McQuinston', 490);
const book12 = new Book ('Nosso lugar entre cometas', 'Fernanda Nia', 432);
const book13 = new Book ('Lendários', 'Makoto Shinkai', 192);
const book14 = new Book ('Jogos de Herança', 'Jennifer Lynn Barnes', 444);
const book15 = new Book ('Amor(es) Verdadeiro(s)', 'Taylor Jenkins Reid', 444);
const book16 = new Book ('Todo esse tempo', 'Rachel Lippincott, Mikki Daughtry', 284);
const book17 = new Book ('Um de nós está mentindo', 'Karen M. McManus', 384);

const person1 =  new Person('Lívia', 16);
const person2 =  new Person('Manuela', 16);
const person3 =  new Person('Nicolly', 16);
const person4 =  new Person('Lucas', 16);
const person5 =  new Person('Marcelo', 16);
const person6 =  new Person('Raissa', 18);

person1.getBook(book2);
person1.getBook(book8);
person2.getBook(book1);
person2.getBook(book7);
person2.getBook(book11);
person3.getBook(book3);
person3.getBook(book9);
person3.getBook(book12);
person4.getBook(book4);
person4.getBook(book10);
person5.getBook(book5);
person5.getBook(book14);
person6.getBook(book6);
person6.getBook(book13);

biblioteca.addPerson(person1);
biblioteca.addPerson(person2);
biblioteca.addPerson(person3);
biblioteca.addPerson(person4);
biblioteca.addPerson(person5);
biblioteca.addPerson(person6);

biblioteca.addBook(book1);
biblioteca.addBook(book2);
biblioteca.addBook(book3);
biblioteca.addBook(book4);
biblioteca.addBook(book5);
biblioteca.addBook(book6);
biblioteca.addBook(book7);
biblioteca.addBook(book8);
biblioteca.addBook(book9);
biblioteca.addBook(book10);
biblioteca.addBook(book11);
biblioteca.addBook(book12);
biblioteca.addBook(book13);
biblioteca.addBook(book14);
biblioteca.addBook(book15);
biblioteca.addBook(book16);
biblioteca.addBook(book17);

let msg1 = "";

 person1.arrayBooks.forEach(book => {
     msg1 += book.title + ", ";
 });

console.log(person1.name + " possui os livros: " + msg1);

let msg2 = "";

person2.arrayBooks.forEach(book => {
    msg2 += book.title + ", ";
});

console.log(person2.name + " possui os livros: " + msg2);

let msg3 = "";

person3.arrayBooks.forEach(book => {
    msg3 += book.title + ", ";
});

console.log(person3.name + " possui os livros: " + msg3);

let msg4 = "";

person4.arrayBooks.forEach(book => {
    msg4 += book.title + ", ";
});

console.log(person4.name + " possui os livros: " + msg4);

let msg5 = "";

person5.arrayBooks.forEach(book => {
    msg5 += book.title + ", ";
});

console.log(person5.name + " possui os livros: " + msg5);

let msg6 = "";

person6.arrayBooks.forEach(book => {
    msg6 += book.title + ", ";
});

console.log(person6.name + " possui os livros: " + msg6);

console.log(" ");

console.log(`Os livros disponíveis para empréstimo são: ` + biblioteca.libraryBooks[16].title + " e " + biblioteca.libraryBooks[15].title + ".");