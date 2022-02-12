import { useState } from "react";
import ColorInput from "./ColorInput";
import ShowBox from "./ShowBox";

const Content = () => {

    const [color, setColor] = useState("")
    const [hexColor, setHexColor] = useState("")
    const [isDarkText, setIsDarkText] = useState(true)

    return (
        <main>
            <ShowBox
                color={color}
                hexColor={hexColor}
                isDarkText={isDarkText}
            />
            <ColorInput 
                color = {color}
                setColor = {setColor}
                setHexColor = {setHexColor}
                isDarkText ={isDarkText}
                setIsDarkText = {setIsDarkText}
            />
        </main>
    )
}


export default Content; // ';' this can be omitted here
