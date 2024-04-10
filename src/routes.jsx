import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Produto from "./pages/Produtos/Produtos.jsx";




function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/produtos" element={<Produto/>} />
            </Routes>
        </BrowserRouter>       
    )
}

export default Rotas;