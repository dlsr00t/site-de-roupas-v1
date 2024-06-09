/*
function Cards(name, price, image, description){


    return(
        
    )
}
*/

function Cards(props){
    const estilo = {
        display:"flex",
        position:"relative",
        flexDirection:"column",
        overflow:"hidden",
        boxSizing: "border-box",
        
    }
    const estiloInfo = {
        color:"red",
        display:"flex",
        position:"absolute",
        flexDirection:"column",
        alignItems:"flex-start",
        transform: "translate(70%, 70%)",
        boxSizing: "border-box"
    }
    return(
    <div id = "parent" style={estilo}>
        <img src={props.image} style={{maxWidth: "250px"}}>

        </img>
        <div style={estiloInfo}>
            <h3>{props.name}</h3>
            <h1>{props.price}</h1>
            <p>{props.description}</p>
        </div>
    </div>
    )
}

export default Cards;