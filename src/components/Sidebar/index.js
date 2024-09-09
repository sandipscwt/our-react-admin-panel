import { useState } from "react";
import { Button } from "@mui/material";
import { MdDashboard, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaProductHunt, FaUser } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Import useLocation for getting the current path

const menuData = [
    {
        title: "Users",
        icon: "FaUser",
        subMenu: [
            { title: "All Users", path: "/Users" },
            { title: "Repeter", path: "/repeter" },
        ]
    },
];

const Sidebar = () => {
    const [openMenu, setOpenMenu] = useState(null);
    const location = useLocation(); // Get the current path

    // Toggle the sub-menu for a particular item
    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    // Function to get the correct icon component
    const getIcon = (iconName) => {
        const icons = {
            MdDashboard: <MdDashboard />,
            FaProductHunt: <FaProductHunt />,
            FaUser: <FaUser />
        };
        return icons[iconName] || null;
    };

    // Check if a sub-menu item is active based on the current route
    const isActive = (path) => location.pathname === path;

    const navigate = useNavigate();
    const handleNavigation = (menu) => {
        navigate('/');
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Button onClick={handleNavigation}>
                            <span className="icon"><MdDashboard /></span>
                            Dashboard
                            <span className="arrow"><MdOutlineKeyboardArrowDown /></span>
                        </Button>
                    </li>
                    {menuData.map((menu, index) => (
                        <li
                            key={index}
                            className={
                                // Add 'active' class if the menu is open or any of its sub-menu items are active
                                openMenu === menu.title || menu.subMenu.some((subItem) => isActive(subItem.path)) ? "active-li" : ""
                            }
                        >
                            <Button onClick={() => toggleMenu(menu.title)}>
                                <span className="icon">{getIcon(menu.icon)}</span>
                                {menu.title}
                                {menu.subMenu.length > 0 && (
                                    <span className="arrow">
                                        {openMenu === menu.title ? <MdOutlineKeyboardArrowDown /> : <MdOutlineKeyboardArrowRight />}
                                    </span>
                                )}
                            </Button>
                            {menu.subMenu.length > 0 && (
                                <div className={`sub-menu-container ${openMenu === menu.title ? "open" : ""}`}>
                                    <ul className="sub-menu">
                                        {menu.subMenu.map((subItem, subIndex) => (
                                            <li key={subIndex}>
                                                <Link to={subItem.path} className={isActive(subItem.path) ? "active" : ""}>
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
