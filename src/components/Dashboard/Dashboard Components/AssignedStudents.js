import React from 'react';
import img4 from '../../../assets/img4.png';
import img6 from '../../../assets/img8.png';
import img3 from '../../../assets/img3.png';
import img10 from '../../../assets/img10.png';
import img11 from '../../../assets/img11.png';
import img12 from '../../../assets/img12.png';
import img13 from '../../../assets/img13.png';
import img14 from '../../../assets/img14.png';
import img1 from '../../../assets/img1.png';
import img2 from '../../../assets/img2.png';
import img15 from '../../../assets/img15.png';


export default function AssignedStudents() {
  const students = [
    {
      name: "Ervin Howell",
      progress: '100',
      image: img4,
    },
    {
      name: "Chelsey Dietrich",
      progress: '100',
      image: img6,
    },
    {
      name: "Nicholas Runolfsdottir V",
      progress: '13',
      image: img10,
    },
    {
      name: "Glenna Reichert",
      progress: '10',
      image: img11,
    },
    {
      name: "Clementina DuBuque",
      progress: '64',
      image: img12,
    },
    {
      name: "Leanne Graham",
      progress: '100%',
      image: img3,
    },
    {
      name: "Dennis Schulist",
      progress: '81',
      image: img13,
    },
    {
      name: "Cristiano",
      progress: '22',
      image: img14,
    },
    {
      name: "Jadon Sancho",
      progress: '53',
      image: img15,
    },
    {
      name: "Usain Bolt",
      progress: '61',
      image: img2,
    },
    {
      name: "Lambert Jr",
      progress: '82',
      image: img1,
    },
  ];

  return (
    <div className='assigned-students'>
      <div className="title-cont">
        <div className="title">
          <h4 className='mb4'>Students Assigned To You (Progress %):</h4>
          <h1>11 Students</h1>
        </div>

      </div>
      <div className="active">
        {students.map((data, index) => {
          return (
            <div className="a-student" key={index}>
              <div className="name">
                <img src={data.image} alt={data.name} />
                <h5>{data.name}</h5>
              </div>
              <h5>{data.progress}%</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}


