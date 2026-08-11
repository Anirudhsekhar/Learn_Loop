import React from "react";
import "./Style/Second.css"



function Card(props){
    return <div className="secChild">
        <h3>{props.heading}</h3>
        <img src={props.img} />
        <p id="secShort">{props.para}</p>
    </div>

}

export default Card