import React, { useState, useEffect } from 'react';
import '../style.css';
import Book from './Books';

function Bookshelf() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf'));
    if (storedBookshelf) {
      setBookshelf(storedBookshelf);
    }
  }, []);

  const handleDelete = (bookKey) => {
    const updatedBookshelf = bookshelf.filter(book => book.key !== bookKey);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4 text-custom-green">My Bookshelf</h1>
      <div className="flex flex-row flex-wrap mt-5 gap-6">
        {bookshelf.filter(book => book.title) .map((book, index) => (
          <div key={book.key} className="flex flex-col p-4 rounded mb-4 bg-white shadow-md">
            <Book
              id={index}
              title={book.title}
              Edition_Count={book.edition_count}
              isInBookshelf={true}
            />
            <button
              className="mt-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => handleDelete(book.key)}
            >
              Remove from Bookshelf
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bookshelf;
