import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import Bookshelf from './bookshelf';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/bookshelf" element={<Bookshelf />} />
    </Routes>
  );
}

export default Main;
