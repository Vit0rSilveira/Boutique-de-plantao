import React, { useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function User() {
    const [cookies] = useCookies(["credentials"]);
    const navigate = useNavigate()
    
    return (
        <>
            <main>
                <h1>Esse aqui é o perfil Usuário</h1>
            </main>
        </>
    )
}


export default User;