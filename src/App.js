import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Contact from './components/Contact';
import Page404 from './components/Page404';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='Login' element={<Login/>}/>
          <Route path='Contact' element={<Contact/>}/>
          <Route path='Page404' element={<Page404/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;