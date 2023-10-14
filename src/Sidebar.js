import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {
  const user=useSelector(selectUser)
  const recentItem =(topic)=>(
        <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
        </div>  
  )
  return (
    <div className='sidebar'>
      <div className="sidebar_top">
        <img src="https://images.unsplash.com/photo-1691225557634-863116e2eb1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80" alt="" />
        <Avatar src={user.photoURL} className='sidebar__avatar' >{user.email[0]}</Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
           <p>Who viewed you</p> 
           <p className="sidebar__statNumber"> 2,346</p>
        </div>
        <div className="sidebar__stat">
            <p>Views on Post</p> 
            <p className="sidebar__statNumber">2,444</p> 
        </div>
      </div>


      <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem('reactjs')}
          {recentItem('programming')}
          {recentItem('software')}
          {recentItem('electroicsengineering')}
          {recentItem('design')}
          {recentItem('developer')}

      </div>
    </div>
  )
}

export default Sidebar
