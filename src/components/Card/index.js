import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import iconMap from '../Card/IconMap.js'; // Adjust the path as needed
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Card = ({ title, value, bgColor, iconName, link }) => {
    const IconComponent = iconMap[iconName];
    return (
        <div className="dashboardCard" style={{ backgroundColor: bgColor || '#f7961d'}}>
            <Link to={link || ''}>
                <div className="d-flex justify-content-between">
                    <div>
                        <h4>{title || 'Default Title'}</h4>
                        <h2>{value || 'N/A'}</h2>
                    </div>
                    <div>
                        <div className="addIcon">
                            {IconComponent ? <IconComponent /> : null}
                        </div>
                    </div>
                </div>
                <div className="actionArea">
                    <p>ACTION</p><Link to={link || ''}><FaRegArrowAltCircleRight /></Link>
                </div>
            </Link>
        </div>
    )
}
export default Card;