const Book = require('./Book');
const EBook = require('./EBook');

const book1 = new Book('The Lord of the Rings', 'Harper Collins', 2009);
const book2 = new Book('Harry Potter', 'J. K. Rowling', 2017);
const book3 = new Book('The Little Prince', 'Antoine de Saint-Exupéry', 1943);
const ebook1 = new EBook('ATMOSPHERE', 'Taylor Jenkins Reid', 1980, 'PDF');

book1.printInfo();
book2.printInfo();
book3.printInfo();
ebook1.printInfo();
