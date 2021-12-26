const Footer = ({itemLength}) => {
    const today = new Date();

    return (
        <footer>
            <p>{itemLength} games</p>
        </footer>
    )
}

export default Footer;
