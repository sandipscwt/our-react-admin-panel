import { useState } from "react";
import { Button } from "@mui/material";
import { MdDashboard, MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaProductHunt, FaUser } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for getting the current path

const menuData = [
    {
        title: "Dashboard",
        icon: "MdDashboard",
        subMenu: [] // No sub-menu for Dashboard
    },
    {
        title: "Products",
        icon: "FaProductHunt",
        subMenu: [
            { title: "Sub-menu A", path: "/products/a" },
            { title: "Sub-menu B", path: "/products/b" },
            { title: "Sub-menu C", path: "/products/c" }
        ]
    },
    {
        title: "Users",
        icon: "FaUser",
        subMenu: [
            { title: "Sub-menu A", path: "/users/a" },
            { title: "Sub-menu B", path: "/users/b" },
            { title: "Sub-menu C", path: "/users/c" }
        ]
    }
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

    return (
        <>
            <div className="sidebar">
                <ul>
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
