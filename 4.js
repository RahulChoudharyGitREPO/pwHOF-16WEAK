const books = [
  { title: "Book 1", author: "author 1", year: 2005 },
  { title: "Book 2", author: "author 2", year: 2015 },
  { title: "Book 3", author: "author 3", year: 2008 },
  { title: "Book 4", author: "author 4", year: 2012 },
  { title: "Book 5", author: "author 5", year: 2003 },
];

const filteredAndCapitalizedBooks = books
  .filter((book) => book.year >= 2010)
  .map((book) => ({
    ...book,
    author: book.author.toUpperCase(),
  }));

console.log("Original Books:");
console.log(books);

console.log("\nFiltered and Capitalized Books (Published after 2010):");
console.log(filteredAndCapitalizedBooks);
