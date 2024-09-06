/*
function Cards(name, price, image, description){


    return(
        
    )
}
*/

import './cards.css';

function Cards(props){
    
    return(
        <div className="parent">
            <img src={props.image}>

            </img>
            <div className="child">
                <h3>{props.name}</h3>
                <h1>{props.price}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Cards;