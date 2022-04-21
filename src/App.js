import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Reddit Timer</h1>
      <Routes>
        <Route path="/" />
        <Route path="/search" />
      </Routes>
    </>
  );
}

export default App;
