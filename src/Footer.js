const Footer = ({itemLength}) => {

    return (
        <footer>
            <p>{itemLength} {itemLength <= 1 ? "Game" : "Games"} </p>
        </footer>
    )

}

export default Footer;
