import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import AllEvents from './components/AllEvents';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/all-events" element={<AllEvents />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;