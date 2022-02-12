import colornames from 'colornames';

const ColorInput = ({
    color, setColor, setHexColor, isDarkText, setIsDarkText
}) => {
    return (
        <form className="colorForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="color">Color</label>
            <input
                autoFocus
                id="color"
                type="text"
                required
                placeholder="Input color for background"
                value={color}
                onChange={(e) => {
                    setColor(e.target.value);
                    setHexColor(colornames(e.target.value));
                }} 
            />
            <button
                type="button"
                onClick={()=>setIsDarkText(!isDarkText)}
            >
                Toggle Text Color
            </button>
        </form>
    )
}

export default ColorInput
