import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/search" element={<h1>Search</h1>} />
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="*" element={<h1>404 - Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
