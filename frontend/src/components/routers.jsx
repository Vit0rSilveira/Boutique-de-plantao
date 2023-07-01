import React from 'react';
import { Route, Router, Routes} from 'react-router-dom';
import Home from '../pages/home_page';
import About_us from '../pages/about_us_page';
import Login from "../pages/login_page";
import Product from '../pages/product_page';
import Register from '../pages/register_page';
import User from '../pages/user_page';
import Adm from '../pages/adm_page';
import Cart from '../pages/cart_page';
import Payment from '../pages/payment_page';
import Search_product from '../pages/product_search';
import Summary from '../pages/purchase_summary';
import Thank_you from '../pages/thank_you_page';
import Register_card from '../pages/register_card';

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
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/pagamento" element={<Payment />} />
        <Route path="/pesquisar/:produto" element={<Search_product />} />
        <Route path="/sumario" element={<Summary />} />
        <Route path='/obrigado' element={<Thank_you />} />
        <Route path='/cartao' element={<Register_card />} />

    </Routes>
  );
}

export default Rotas;
