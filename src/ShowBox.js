const ShowBox = ({color}) => {

    return (
        <container style = {{backgroundColor: color}}>
            <p>{color ? color : "White"}</p>
        </container>
    )

}

export default ShowBox
