import React from "react";

const ShowBox = ({color, hexColor, isDarkText}) => {

    return (
        <section 
            className="ShowBox"
            style = {{
                backgroundColor: color,
                color: isDarkText ? "#000" : "#FFF"
            }}
        >
            <p>{color ? color : "Empty Value"}</p>
            <p>{hexColor ? hexColor : null}</p>
        </section>
    )

}

export default ShowBox
