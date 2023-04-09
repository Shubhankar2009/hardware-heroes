import React from 'react'
import { Link } from 'react-router-dom'
import "./nav_bottom_style.css"


export default function NavBottom() {
  return (
        <div className='nav_bottom'>
            <div className="items">
                <Link to="/" className="nav_items" id='home'></Link>
                <Link to="/idea" className="nav_items" id='ideas'></Link>
            </div>
    </div>
  )
}
