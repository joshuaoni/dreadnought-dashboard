import React from 'react';
import Sidebar from '../Dashboard/Dashboard Components/Sidebar';
import List from './Student Components/List';
import './Students.css';

const Students = () => {
  return (
    <div className='students'>
      <Sidebar />
      <List />
    </div>
  );
}

export default Students;