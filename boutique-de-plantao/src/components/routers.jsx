import React from 'react';
import { Route, Router, Routes} from 'react-router-dom';
import Home from '../pages/home';
import About_us from '../pages/about_us';

function Rotas() {
  return (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/sobre-nos" element={<About_us/>} />
    </Routes>
  );
}

export default Rotas;
