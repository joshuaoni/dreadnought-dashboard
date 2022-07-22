import React from 'react';
import { HiCloudDownload } from 'react-icons/hi';
import { BiGroup, BiBell } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { SiAnalogue } from "react-icons/si";
import { FiHelpCircle } from "react-icons/fi";
import logo from '../../../assets/logo.png';

export default function Sidebar() {
  return (
    <div id="sidebar" className='sidebar'>
      <div className='brand'>
        <img height='44.83px' width='48.36px' src={logo} alt='' />
      </div>
      <ul className='links'>
        <li className='selected'>
          <SiAnalogue />
        </li>
        <li>
          <HiCloudDownload />
        </li>
        <li>
          <BiBell />
        </li>
        <li>
          <AiOutlineDollarCircle />
        </li>
        <li>
          <BiGroup />
        </li>
      </ul>
      <div className='help'>
        <FiHelpCircle />
      </div>
    </div>
  );
}

