import React from 'react';
import { Route, Router, Routes} from 'react-router-dom';
import Home from '../pages/home';
import About_us from '../pages/about_us';
import Login from "../pages/login"

function Rotas() {
  return (
    <Routes>
        <Route exact path = "/" element={<Home/>} />
        <Route path = "/sobre-nos" element={<About_us/>} />
        <Route path = "/login" element = {<Login/>}/>
    </Routes>
  );
}

export default Rotas;
