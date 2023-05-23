import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';

/**
 * React component given the router DOM of the application
 * @returns {React.ReactElement} Router
 */
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
