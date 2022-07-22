import React from 'react';
import AssignedStudents from "./AssignedStudents";
import Avatar from "./Avatar";
import Alert from './Alert';

export default function RightSidebar() {
  return (
    <div id='rightSidebar' className='right-side-bar'>
      <Avatar />
      <AssignedStudents />
      <Alert />
    </div>
  );
}
