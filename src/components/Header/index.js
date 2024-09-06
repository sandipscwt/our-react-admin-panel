import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Logo from '../../assets/logo.png';
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';



const Header = ({ toggleSidebar }) => {

    // ================== For my Account Dropdown ==================
    const [myAccountDrop, setMyAccountDrop] = useState(null);
    const openMyAccount = Boolean(myAccountDrop);
    const handleOpenMyaccount = (event) => {
        setMyAccountDrop(event.currentTarget);
    };
    const handleCloseMyaccount = () => {
        setMyAccountDrop(null);
    };

    // ================== For my Notification Dropdown ==================
    const [notificationDrop, setNotificationDrop] = useState(null);
    const openNotification = Boolean(notificationDrop);
    const handleOpenNotification = (event) => {
        setNotificationDrop(event.currentTarget);
    };
    const handleCloseNotification = () => {
        setNotificationDrop(null);
    };



    return (
        <>
            <header className="main-header d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row d-flex align-items-center">
                        <div className="col-sm-2">
                            <Link to={'/'} className="logo">
                                <div className="d-flex align-items-center">
                                    <img src={Logo} alt="Logo" />
                                    <span className="ml-2">Simpreative</span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-3 d-flex align-items-center">
                            <Button className="rounded-circle mr-3" onClick={toggleSidebar}><MdOutlineMenuOpen /></Button>
                            <SearchBox />
                        </div>
                        <div className="col-sm-7 d-flex align-items-center justify-content-end">
                            <Button className="rounded-circle mr-3"><MdOutlineLightMode /></Button>
                            <Button className="rounded-circle mr-3"><MdDarkMode /></Button>
                            <div className="notificationWrapper">
                                <Button className="rounded-circle mr-3" onClick={handleOpenNotification}><FaBell /></Button>
                                <Menu
                                    anchorEl={notificationDrop}
                                    className="notificationDropdown"
                                    open={openNotification}
                                    onClose={handleCloseNotification}
                                    onClick={handleCloseNotification}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleCloseNotification}>
                                        <div className="notificationImage">
                                            <img src="https://simpreative.com/wp-content/uploads/2022/04/Max-86x86.png" alt="image" />
                                        </div>
                                        <div className="notificationText">
                                            <div>New Registration</div>
                                            <small>Registred by sandymaji007</small>
                                        </div>
                                    </MenuItem>
                                    <Divider className="m-0" />
                                    <MenuItem onClick={handleCloseNotification}>
                                        <div className="notificationImage">
                                            <img src="https://simpreative.com/wp-content/uploads/2022/04/Max-86x86.png" alt="image" />
                                        </div>
                                        <div className="notificationText">
                                            <div>New Login</div>
                                            <small>Loged-in by Vivek Roy</small>
                                        </div>
                                    </MenuItem>
                                    <Divider className="m-0" />
                                    <MenuItem onClick={handleCloseNotification}>
                                        <div className="notificationImage">
                                            <img src="https://simpreative.com/wp-content/uploads/2022/04/Max-86x86.png" alt="image" />
                                        </div>
                                        <div className="notificationText">
                                            <div>New Login</div>
                                            <small>Loged-in by Vivek Roy</small>
                                        </div>
                                    </MenuItem>
                                    <Divider className="m-0" />
                                    <MenuItem onClick={handleCloseNotification}>
                                        <div className="notificationImage">
                                            <img src="https://simpreative.com/wp-content/uploads/2022/04/Max-86x86.png" alt="image" />
                                        </div>
                                        <div className="notificationText">
                                            <div>New Registration</div>
                                            <small>Registred by sandymaji007</small>
                                        </div>
                                    </MenuItem>
                                    <Divider className="m-0" />
                                    <MenuItem onClick={handleCloseNotification}>
                                        <div className="notificationImage">
                                            <img src="https://simpreative.com/wp-content/uploads/2022/04/Max-86x86.png" alt="image" />
                                        </div>
                                        <div className="notificationText">
                                            <div>New Login</div>
                                            <small>Loged-in by Vivek Roy</small>
                                        </div>
                                    </MenuItem>
                                    <Divider className="m-0" />
                                    <MenuItem onClick={handleCloseNotification}>
                                        <div className="notificationImage">
                                            <img src="https://simpreative.com/wp-content/uploads/2022/04/Max-86x86.png" alt="image" />
                                        </div>
                                        <div className="notificationText">
                                            <div>New Login</div>
                                            <small>Loged-in by Vivek Roy</small>
                                        </div>
                                    </MenuItem>
                                </Menu>
                            </div>
                            <div className="myAccountWrapper">
                                <Button className="myAccount d-flex align-items-center" onClick={handleOpenMyaccount}>
                                    <div className="userImage">
                                        <img src="https://dummyimage.com/500x400/ff6699/000" alt="user image" />
                                    </div>
                                    <div className="userInfo ml-1">
                                        <h6>Sandip Maji</h6>
                                        <p>@sandymaji007</p>
                                    </div>
                                </Button>
                                <Menu
                                    anchorEl={myAccountDrop}
                                    id="myAccountDropdown"
                                    open={openMyAccount}
                                    onClose={handleCloseMyaccount}
                                    onClick={handleCloseMyaccount}
                                    slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                                overflow: 'visible',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 1.5,
                                                '& .MuiAvatar-root': {
                                                    width: 32,
                                                    height: 32,
                                                    ml: -0.5,
                                                    mr: 1,
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: 'background.paper',
                                                    transform: 'translateY(-50%) rotate(45deg)',
                                                    zIndex: 0,
                                                },
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem onClick={handleCloseMyaccount}>
                                        <Avatar /> Profile
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyaccount}>
                                        <Avatar /> My account
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem onClick={handleCloseMyaccount}>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyaccount}>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyaccount}>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;