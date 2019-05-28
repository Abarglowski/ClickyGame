import React from "react";
import Score from "./Score"

function Container (props){
    return 
    <div className={`container${props.fluid ? "-fluid : ""}`}>
    <Score/>
    </div>
}