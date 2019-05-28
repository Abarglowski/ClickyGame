import React from "react";
import ".style.css";

function ClickyImages(props) {
    return(
        <div className="card" onClick={props.handleClick}>
            <div className="card-body">
                <div className="img-fluid img-container">
                    <img alt={prop.name} src={props.image} />
                </div>
            </div>
        </div>    
    )
}