import React from "react";
import "./Home.css"
import {Link} from "react-router-dom";
import Logo from "../../assets/logoTransparente.png";
import Loading from "../../assets/loading.png";


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
            </div>
        </div>
    )
}

export default Home;
lalala
