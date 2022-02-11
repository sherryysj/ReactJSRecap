/* ctrl + alt + R to call snippet */
/*  and use _rafce command to create a generic react arrow function component */


const Header = (props) => {
//const Header = ({title}) => { another way to pass props

    // write style as variable
    const headerStyle = {
        backgroundColor: 'royalblue',
        color: '#fff'
    };

    return (
        // refer inline style from variable
        <header style={headerStyle}>
            <h1>{props.title}</h1>
            {/* <h1>{title}</h1> */}
        </header>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header;
