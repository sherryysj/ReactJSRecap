
function Header() {
    return(
        <header>
            <nav className="nav">
                <img src="assets/images/react-logo.png" style={{width:"50px",height:"50px"}} alt="react logo" />
                <ul className="nav-items">
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>    
    )
}

export default Header;