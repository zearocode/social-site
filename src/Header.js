import React from 'react';
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import logo from './assets/logo/logo-linkedin.png';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import { BusinessCenter, Chat } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';






function Header() {
  
  const dispatch = useDispatch();


  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header'>

        <div className="header_left">
          <img src={logo} alt='Linkedin' />

          <div className="header_search">
            <SearchIcon />
            <input placeholder='Search' type="text" />
          </div>
        </div>
             <div className="header_right">
                 <HeaderOption Icon={HomeIcon} title="Home" />
                 <HeaderOption Icon={GroupIcon} title="My Network" />
                 <HeaderOption Icon={BusinessCenter} title="Jobs" />
                 <HeaderOption Icon={Chat} title="Messaging" />
                 <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                 <HeaderOption avatar="https://c4.wallpaperflare.com/wallpaper/987/845/125/action-nature-green-smile-wallpaper-preview.jpg" title="me" onClick={logoutOfApp} />
             </div>

        </div>
  )
};

export default Header;