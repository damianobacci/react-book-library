import styles from "./App.module.css";
import Book from "./Book";

const dummy_books = [
  { author: "TOLSTOJ", title: "War and Peace", pages: 150 },
  { author: "TOLSTOJ", title: "War and Peace", pages: 890 },
  { author: "TOLSTOJ", title: "War and Peace", pages: 223 },
  { author: "TOLSTOJ", title: "War and Peace", pages: 440 },
];

function App() {
  return (
    <>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" />
        <label htmlFor="pages">Pages</label>
        <input type="number" id="pages" name="pages" />
      </form>
      <div className={styles.library}>
        {dummy_books.map((book) => (
          <Book text={book.author} width={book.pages} />
        ))}
      </div>
    </>
  );
}

export default App;
