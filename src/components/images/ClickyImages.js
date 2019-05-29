import React from "react";
import "./style.css";

function ClickyImages(props) {

    return(
        <div className="card img-fluid img-container" onClick={() => props.handleClick(props.id)}>
            <img alt={props.name} src={props.image}/>
        </div>    
    )
}

export default ClickyImages;