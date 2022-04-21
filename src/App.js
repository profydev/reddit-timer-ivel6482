import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/search" element={<h1>Search</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
