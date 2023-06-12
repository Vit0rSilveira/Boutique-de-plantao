import React from "react";
import { Link } from 'react-router-dom';
import "../styles/components/footer.css"

function Footer(props) {
    return (
        <footer>
            <div id="ajuda_suporte">
                <h3>Ajuda e Suporte</h3>
                <p>FAQ</p>
                <p>Prazo de entrega</p>
                <p>Taxas cobradas</p>
                <p>Formas de pagamento</p>
            </div>

            <div id="atendimento">
                <h3>Atendimento</h3>
                <img src="../images/footer/telefone.png" alt="telefone_atendimento" />
                <p>sac@fontes.br</p>
                <p>(16) 99571-2203</p>
            </div>

            <div id="formas_pagamento">
                <h3>Formas de Pagamento</h3>
                <img src="../images/footer/formas_de_pagamento/mastercard-outline.png" alt="mastercard" />
                <img src="../images/footer/formas_de_pagamento/visa-outline.png" alt="visa" />
                <img src="../images/footer/formas_de_pagamento/paypal-outline.png" alt="paypal" />
                <img src="../images/footer/formas_de_pagamento/applepay-outline.png" alt="applepay" />
                <img src="../images/footer/formas_de_pagamento/card-default-outline.png" alt="cartao" />
                <img src="../images/footer/formas_de_pagamento/cash-dollar-outline.png" alt="dinheiro" />
            </div>

            <div id="redes_sociais">
                <h3>Redes sociais</h3>
                <a href="https://www.facebook.com" target="_blank"><img src="../images/footer/redes_sociais/facebook.png" alt="facebook" /></a>
                <a href="https://www.instagram.com" target="_blank"><img src="../images/footer/redes_sociais/instagram.png" alt="instagram" /></a>
            </div>

            <div id="logo_footer">
                <Link to="/"><img src="../images/logos/logo_icone.png" alt="Logo da empresa" id="footer-logo" /></Link>
            </div>
        </footer>
    );
}

export default Footer;