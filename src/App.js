import "./App.css";

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from "./Landing/Home";
import Work from "./Landing/Work";
import Etapes from "./Landing/Etapes";
import Formations from "./Landing/Formations";
import Packs from "./Landing/Packs";
import Premierrdv from "./Landing/Premierrdv";
import Politiquedeconfidentialite from "./Landing/Politiquedeconfidentialite";
import CGU from "./Landing/CGU";
import Mentionslegales from "./Landing/Mentionslegales";
// import Contact from "./Landing/Contact";


// components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/etapes' element={<Etapes />} />
        <Route path='/formations' element={<Formations />} />
        <Route path='/lespoints' element={<Work />} />
        <Route path='/packs' element={<Packs />} />
        <Route path='/lespoints' element={<Work />} />
        <Route path='/premierrdv' element={<Premierrdv />} />
        <Route path='/cgu' element={<CGU />} />
        <Route path='/politiquedeconfidentialite' element={<Politiquedeconfidentialite />} />
        <Route path='/mentionslegales' element={<Mentionslegales />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;