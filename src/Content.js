import { useState } from "react";
import ColorInput from "./ColorInput";
import ShowBox from "./ShowBox";

const Content = ({items, setItems}) => {

    const [color, setColor] = useState("")

    // use Tab to auto indentation
    return (
        <main>
            <ShowBox
                color={color}
            />
            <ColorInput 
                color = {color}
                setColor = {setColor}
            />
        </main>
    )
}


export default Content; // ';' this can be omitted here
