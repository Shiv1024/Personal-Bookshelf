import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';
import Book from './Books';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [bookshelf, setBookshelf] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  const handleClick = (newId) => {
    const selectedBook = results[newId];
    if (selectedBook && selectedBook.title) {
      const updatedBookshelf = [...bookshelf, selectedBook];
      setBookshelf(updatedBookshelf);
      localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    } else {
      console.warn("Invalid book data:", selectedBook);
    }
  };

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setQuery(value);
    if (value) {
      const response = await fetch(`https://openlibrary.org/search.json?q=${value}&limit=10&page=1`);
      const data = await response.json();
      setResults(data.docs);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-custom-green">Search by Book Name:</h1>
      <div className="w-full max-w-md mb-4 md:flex md:justify-between md:items-center">
        <input
          type="text"
          placeholder="Type book name"
          className="w-full p-2 border border-gray-300 rounded mb-2 md:mb-0 md:mr-2"
          value={query}
          onChange={handleInputChange}
        />
        <button
          className="lg:absolute top-5 right-20 md:flex bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => navigate("/bookshelf")}
        >
          My Bookshelf
        </button>
      </div>
      <div className="flex flex-row flex-wrap mt-2 md:mt-5">
        {results.map((book, index) => {
          const isInBookshelf = bookshelf.some(b => b.key === book.key);
          return (
            <div key={book.key}>
              <Book
                id={index}
                key={index}
                title={book.title}
                Edition_Count={book.edition_count}
                isInBookshelf={isInBookshelf}
                onClick={() => handleClick(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
