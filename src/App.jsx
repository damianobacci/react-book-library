import { useState } from "react";
import styles from "./App.module.css";
import Book from "./Book";

const preset_books = [
  { author: "TOLSTOJ", title: "War and Peace", pages: 250 },
  { author: "TOLSTOJ", title: "War and Peace", pages: 890 },
  { author: "TOLSTOJ", title: "War and Peace", pages: 223 },
  { author: "TOLSTOJ", title: "War and Peace", pages: 440 },
];

function App() {
  const [books, setBooks] = useState(preset_books);

  const bookAddHandler = (event) => {
    event.preventDefault();

    const title = event.target.title.value;
    const author = event.target.author.value;
    const pages = parseInt(event.target.pages.value);

    const newBook = {
      author: author,
      title: title,
      pages: pages,
    };

    setBooks((prevBooks) => [...prevBooks, newBook]);
  };
  return (
    <>
      <form onSubmit={bookAddHandler}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" />
        <label htmlFor="pages">Pages</label>
        <input type="number" id="pages" name="pages" />
        <button type="submit">Add Book</button>
      </form>
      <div className={styles.library}>
        {books.map((book, index) => (
          <Book
            key={index}
            text={book.author}
            width={book.pages}
            title={book.title}
          />
        ))}
      </div>
    </>
  );
}

export default App;
