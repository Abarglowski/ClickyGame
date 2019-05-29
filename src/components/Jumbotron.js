import React from "react";

function Jumbotron (){
    return(
        <div className ="jumbotron bg-info text-light pb-1 pt-1">
        <h1> Welcome to Clicky Game!</h1>
        <p>Down below are images that you can click.  everytime you click one you get a point, and the pictures shuffle.</p>
        <p>Then you will be able to click another picture, make sure you dont click the same picture twice or you will lose!</p>
        <p>To win you must click each picture once. </p>
        </div>
    )
}

export default Jumbotron