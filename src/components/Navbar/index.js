import './index.css'

const Navbar = () => (
    <nav className="navbar">
        <div className="nav-header">
            <img src="https://res.cloudinary.com/demx1ym4x/image/upload/v1732866542/image_45_s0b84v.png" alt="website logo" className="website-logo" />
            <ul className="nav-menu">
                <li href="#home" className="nav-item">Home</li>
                <li href="#find-doctors" className="nav-item active">Find Doctors</li>
                <li href="#about-us" className="nav-item">About Us</li>
            </ul>
            <div className="button-container">
                <button type="button" className="login-btn">Login</button>
                <button type="button" className="sign-up-btn">Sign-up</button>
            </div>
        </div>
    </nav>
)

export default Navbar