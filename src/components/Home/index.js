import { RxCross2 } from "react-icons/rx"; // import the cross icon
import Navbar from '../Navbar'
import Header from '../Header'
import Filters from '../Filters'
import DoctorCard from "../DoctorCard";
import './index.css'

const Home = () => (
    <>
        <Navbar />
        <Header />
        <div className="filters-container">
            <Filters />
        </div>
        <div className="filtered-text-container">
            <p className="filtered-text">Hair care <span className="cross-icon"><RxCross2 /></span> </p>
            <p className="filtered-text">Female <span className="cross-icon"><RxCross2 /></span> </p>
            <p className="filtered-text">Rs.0-Rs.500 <span className="cross-icon"><RxCross2 /></span> </p>
            <p className="filtered-text">Hindi <span className="cross-icon"><RxCross2 /></span> </p>
        </div>
        <div className="doctor-card-container">
            <DoctorCard />
            <DoctorCard />
            <DoctorCard />
        </div>
        
    </>
)

export default Home