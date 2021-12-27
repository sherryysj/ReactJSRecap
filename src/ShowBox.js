import React from "react";

const ShowBox = ({color}) => {

    return (
        <div 
            className="ShowBox"
            style = {{backgroundColor: color}}
        >
            <p style ={{color: color === "black" ? "white" : "black"}}>Background Color: {color ? color : "white"}</p>
        </div>
    )

}

export default ShowBox
