import React from "react";

function Score(props){
    return(
        <h4 className="text-success text-center">High Score: {props.highScore} Score {props.score}</h4>
    )
}

export default Score