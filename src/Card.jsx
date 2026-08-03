import React from "react";



function Card(props){
    return <div>
        <h3>{props.heading}</h3>
        <img src={props.img} />
        <p>{props.para}</p>
    </div>

}

export default Card