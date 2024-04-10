import React from "react";
import "./Home.css"
import {Link} from "react-router-dom";


function Home(){
    const pesquisar = () =>{

        let pesquisar = document.getElementById("campo-de-pesquisa");
        pesquisar.addEventListener("keypress", () => {ouvinteClick(event)});
    }
    
    const ouvinteClick = (e) => {
        if(e.key == "Enter"){
            let botao = document.getElementById("btn");
            botao.click();
            console.log("clicado");
        }
    }
    
    const teste = () => {
        addEventListener("keypress", ()=> {
            if (e.key == "y") {
                open("https://youtube.com")
            }else{
                console.log("outra tecla foi pressionada")
            }
        })

    }

    
    return(
        <>
        <div onClick={teste}>
            <ul className="navbar">
                <li className="item"><Link>Home</Link></li>
                <li className="item"><Link to="/produtos">Produtos</Link></li>
                <li className="item"><Link>Carrinho</Link></li>
            </ul>
        </div>

        <div className = "div-pesquisa">
            <input type="text" id="campo-de-pesquisa" onClick={pesquisar}/>
            <button id = "btn"><ion-icon id='icone' name="search-outline"></ion-icon></button>
        </div>
        </>
       


    )
}

export default Home;
