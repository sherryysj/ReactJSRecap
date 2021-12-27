const ColorInput = ({color, setColor}) => {
    return (
        <form className="colorForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="color">Color</label>
            <input
                id="color"
                type="text"
                role="colorBox"
                placeholder="Input color for background"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
        </form>
    )
}

export default ColorInput
