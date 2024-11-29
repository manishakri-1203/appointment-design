import './index.css'

const Filters = () => (
    <ul className="filters-list">
        <li className="filters-item">
            <select className="select-input">
                <option>Expertise</option>
                <option>Hair care</option>
                <option>Skin care</option>
                <option>Women's Health</option>
                <option>Immunity</option>
            </select>
        </li>
        <li className="filters-item">
            <select className="select-input">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
            </select>
        </li>
        <li className="filters-item">
            <select className="select-input">
                <option>Fees</option>
                <option>Rs.0-Rs.500</option>
                <option>Rs.500-Rs.1000</option>
                <option>Rs.1000-Rs.1500</option>
            </select>
        </li>
        <li className="filters-item">
            <select className="select-input">
                <option>Language</option>
                <option>English</option>
                <option>Hindi</option>
                <option>Telugu</option>
                <option>Marathi</option>
            </select>
        </li>
        <li className="filters-item">
            <select className="select-input filter-active">
                <option>All filters</option>
                <option>Expertise</option>
                <option>Gender</option>
                <option>Fees</option>
                <option>Language</option>
            </select>
        </li>
    </ul>

    
)

export default Filters