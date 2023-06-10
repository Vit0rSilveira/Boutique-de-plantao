import React from 'react';
import { Route, Router, Routes} from 'react-router-dom';
import Home from '../pages/home_page';
import About_us from '../pages/about_us_page';
import Login from "../pages/login_page";
import Product from '../pages/product_page';
import Register from '../pages/register_page';
import User from '../pages/user_page';
import Adm from '../pages/adm_page';

function Rotas() {
  return (
    <Routes>
        <Route exact path = "/" element={<Home/>} />
        <Route path = "/sobre-nos" element={<About_us/>} />
        <Route path = "/login" element = {<Login/>}/>
        <Route path="/produto/:idProduto" element={<Product />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/adm" element={<Adm />} />
        <Route path="/perfil" element={<User />} />
    </Routes>
  );
}

export default Rotas;