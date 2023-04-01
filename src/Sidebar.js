import React from 'react';
import "./Sidebar.css";
import { Avatar } from '@mui/material';
import sidebar_bg from './assets/images/sidebar_profile_bg.jpg';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';



function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
           
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>

        </div>
    );
        
    

  return (
    <div className="sidebar">
        <div className="sidebar_top">
            <img src={sidebar_bg} alt='' />
            <Avatar className='sidebarAvatar' src={user.photoUrl}>{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar_stats">
        <div className="sidebar_stat">
            <p>Who viewd you</p>
            <p className="sidebar_statNumber">
                250000
            </p>
        </div>
        <div className="sidebar_stat">
            <p>Views on post</p>
            <p className="sidebar_statNumber">
                32423
            </p>
        </div>
        </div>
        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('ReactJS')}
            {recentItem('NodeJs')}
            {recentItem('Programming')}
            {recentItem('Software Engineering')}
            {recentItem('VueJS')}
            {recentItem('Fireship')}
        </div>

    </div>
  )
}

export default Sidebar