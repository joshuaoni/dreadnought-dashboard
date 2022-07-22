import React from 'react';
import { BsChevronRight } from "react-icons/bs";
import img1 from '../../../assets/img3.png';
import img2 from '../../../assets/img4.png';
import img3 from '../../../assets/img6.png';
import img4 from '../../../assets/img7.png';
import img5 from '../../../assets/img8.png';
import img6 from '../../../assets/img9.png';


export default function Submitted() {
  const project = [
    {
      title: "Leanne Graham",
      days: 2,
      image: img1
    },
    {
      title: "Ervin Howell",
      days: 3,
      image: img2
    },
    {
      title: "Clementine Bauch",
      days: 3,
      image: img3
    },
    {
      title: "Patricia Lebsack",
      days: 5,
      image: img4
    },
    {
      title: "Chelsey Dietrich",
      days: 6,
      image: img5
    },
    {
      title: "Kurtis Weissnat",
      days: 9,
      image: img6
    },
  ];
  return (
    <div className='submitted card-style'>
      <div className="title-cont">
        <div className="title">
          <h4>Digital Assets Submissions</h4>
        </div>
        <div className="filters">
          <span>Recent Submissions</span>
          <button className='ml3'>All Submissions</button>
        </div>
      </div>
      <div className="projects">
        {project.map(({ title, days, image }) => {
          return (
            <div className="project" key={title}>
              <div className="details">
                <div className="image">
                  <img className='br2' src={image} alt="title" />
                </div>
                <div className="info">
                  <h5>{title}</h5>
                  <h6>{days} days ago</h6>
                </div>
              </div>
              <BsChevronRight />
            </div>
          );
        })}
      </div>
    </div>
  );
}

