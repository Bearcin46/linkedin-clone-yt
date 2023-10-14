import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import Icon from './images/logo1.jpeg'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import {auth} from './firebase'
import {logout, selectUser} from './features/userSlice'



function Header() {
  const dispatch=useDispatch()
  const user=useSelector(selectUser);
  
  const logoutOfApp =() =>{
    dispatch(logout())
   auth.signOut()
  }
  return (
    <div className='Header'>
     

      <div className="header__left">
          <img src={Icon} alt="here is a image" />


          <div className="header__search">

            <SearchIcon />
            <input type="text" placeholder='Search' />
          </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messages" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />

        <HeaderOption title='me' avatar={true}
        onClick={logoutOfApp}/>
      </div>
    </div>
  )
}

export default Header
