import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='nav'>
      <div className='flex'>
        <h2>Students List</h2>
        <h2>|</h2>
        <Link to='/'><button className='btn'><h2>Dashboard</h2></button></Link>
      </div>
    </div>
  );
}
