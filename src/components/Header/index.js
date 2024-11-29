import { MdLocationOn } from "react-icons/md"; // Import the location icon
import { FaArrowRightLong } from "react-icons/fa6"; //Import the right arrow icon
import './index.css'

const Header = () => (
    <div className="header-container">
    <h1 className="header-text">Find expert Doctors for an In-clinic session here </h1>
    <div className="search-bar">
            <div className="location-select-container">
                <MdLocationOn className="location-icon" />
                <select className="location-select">
                <option>Select Location</option>
                <option>Delhi</option>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Hyderabad</option>
                </select>
            </div>
            <div className="search-input-container">
                <input type="search" placeholder="e.g. Doctor, specialization, clinic name" className="search-input" />
                <FaArrowRightLong color="#3A643B" />
            </div>
        </div>

    </div>
)

export default Header