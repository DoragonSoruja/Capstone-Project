import logo from "../icons/Logo.svg"

function Navigation() {
    return (
    <nav>
        <img src={logo} alt="Little Lemon Logo" />
        <ul>
            <li><b>Home</b></li>
            <li><b>About</b></li>
            <li><b>Menu</b></li>
            <li><b>Reservation</b></li>
            <li><b>Order Online</b></li>
            <li><b>Login</b></li>
        </ul>
    </nav>
    )
}

export default Navigation