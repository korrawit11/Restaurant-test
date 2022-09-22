import React from 'react'
import './Sidebar.css'
import logo from './logo.png'

function Sidebar() {
    return (
        <div className="sidebar-container">
            <img src={logo}/>
            <div className="text">
            <h5>Place</h5>
            </div>
        </div>
    )
}

export default Sidebar;