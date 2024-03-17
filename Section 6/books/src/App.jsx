import { useState } from "react";
import BookCreate from "./components/BookCreate";
import "./App.css";
import { testF } from "./components/test";

// console.log(test);

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    // BAD CODE
    books.push({ id: 123, title });
    setBooks(books);
  };

  return (
    <div>
      {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
