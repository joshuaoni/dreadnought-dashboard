import React from 'react';
import { BiChevronDown } from "react-icons/bi";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav'>
      <div className='flex'>
        <h2>Overview</h2>
        <h2>|</h2>
        <Link to='/students'><button className='btn'><h2> Students List</h2></button></Link>
      </div>
      <div className='timeline'>
        <span>Last 20 Days</span>
        <BiChevronDown />
      </div>
    </div>
  );
}
