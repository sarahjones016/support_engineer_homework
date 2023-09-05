import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li ><Link to='/'>Optimization Settings</Link></li>
        <li ><Link to='/part2'>Org Creation Date, Status, and Plan Name</Link></li>
        <li ><Link to='/part3'>Canceled Orgs</Link></li>
        <li ><Link to='/part4'>Organization Record</Link></li>
      </ul>
    </div>
  )
}

export default Navbar