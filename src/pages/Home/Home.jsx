import React from "react";
import "./Home.css"
import {Link} from "react-router-dom";
import Logo from "../../assets/logoTransparente.png";
import Loading from "../../assets/loading.png";
import Cards from "../Components/cards.jsx";
import blusa from "../../assets/blusa-azul.jpeg";

//TODO fazer um filtro de pesquisa.

function Home(){
    const pesquisar = () =>{

        let pesquisar = document.getElementById("campo-de-pesquisa");
        pesquisar.addEventListener("keypress", () => {ouvinteClick(event)});
    }
    
    const ouvinteClick = () => {
        if(e.key == "Enter"){
            let botao = document.getElementById("btn");
            botao.click();
            console.log("clicado");
        }
    }
    
    
    const teste = (e) => {
        addEventListener("keypress", ()=> {
            if (e.key == "y") {
                open("https://youtube.com")
            }else{
                console.log("outra tecla foi pressionada")
            }
        })

    }

    const logoT = {
        backgroundImage:{Logo}
    };

    return(
        <div className="overall">
            <div className="topnav" onClick={teste}>
                {/*<Link className="nav-item" id="item1"><ion-icon name="home-outline"></ion-icon></Link>*/}
                <Link id="item1"><img id="logoDoSite" src={Logo}></img></Link>
                <Link className="nav-item" id="item2" to="/produtos"><ion-icon name="shirt-outline"></ion-icon></Link>
                <input type="text" id="campo-de-pesquisa" onClick={pesquisar}/>
                <button id="btn"><ion-icon id='icone' name="search-outline"></ion-icon></button>
                <Link id="item3"><ion-icon name="cart-outline"></ion-icon></Link>
            </div>  
                
            <div>
                <img id="loading" src={Loading}></img>
                <Cards name="blusa-azul" price="R$150" image={blusa} description="something"></Cards>
            </div>
        </div>
    )
}

export default Home;

/*
monitor yamaha - 3100
microphone shure - 3000
Fones de Ouvido Beyerdynamic DT 990 PRO para studio - 2000 / audio technica m50x - 1500
mesa de som - 2000
akai 
*/

