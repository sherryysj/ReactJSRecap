const Footer = ({itemLength}) => {

    const date = new Date();

    return (
        <footer>
            <p>{itemLength} {itemLength === 1 ? "Task" : "Tasks"} Left</p>
            <p>{date.toLocaleDateString()}</p>
        </footer>
    )

}

export default Footer;
