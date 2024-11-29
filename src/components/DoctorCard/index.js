import { FaStar } from "react-icons/fa";
import { BiCapsule, BiCommentDetail } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";
import './index.css'

const DoctorCard = () => (
    <div className="doctor-card">
      {/* Profile Section with Image and Rating */}
      <div className="profile-container">
        <img
          src="https://res.cloudinary.com/demx1ym4x/image/upload/v1732859697/Ellipse_725_qhl30u.png" // Replace with actual image URL
          alt="Doctor"
          className="profile-pic"
        />
        <div className="rating-badge">
          <span>4.5</span>
          <FaStar color="yellow" />
        </div>
      </div>

      {/* Doctor Information */}
      <h3 className="doctor-name">Dr. Prerna Narang</h3>
      <div className="doctor-details">
        <BiCapsule color="#3A643B" size="22" />
        <p className="info">Male-Female Infertility</p>
      </div>
      <div className="doctor-details">
        <LuGraduationCap color="#3A643B" size="22" />
        <p className="info">7 years of Experience</p>
      </div>
      <div className="doctor-details">
        <BiCommentDetail color="#3A643B" size="22" />
        <p className="info">Speaks: English, Hindi, Marathi</p>
      </div>

      {/* Consultation Details */}
      <div className="consultation-container">
        <p className="consultation">
          Video Consultation: <br/> <span className="consultation-fee">₹800</span>
        </p>
        <p className="consultation">
          Chat Consultation: <br/><span className="consultation-fee">Free</span>
        </p>
      </div>

      {/* Action Buttons */}
      <div className="actions-btn-container">
        <button className="view-profile-btn">View Profile</button>
        <button className="book-consultation-btn">Book a Consultation</button>
      </div>
    </div>
)

export default DoctorCard