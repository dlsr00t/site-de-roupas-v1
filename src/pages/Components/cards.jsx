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

    }
    const estiloInfo = {
        color:"red",
        display:"flex",
        position:"absolute",
        flexDirection:"column",
        alignItems:"flex-start",
        top:"50%"
    }
    return(
    <div id = "parent" style={estilo}>
        <img src={props.image} style={{width: "17%"}}>

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