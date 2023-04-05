import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import JokeFetcher from "./components/jokeFetcher";

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/*" element={<JokeFetcher />} />
          </Routes>
        </header>
      </div>
  );
}

export default App;