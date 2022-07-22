import React, { useState } from 'react';
import Navbar from './Navbar';
import Search from './Search';
import People from './People';
import img4 from '../../../assets/img4.png';
import img6 from '../../../assets/img8.png';
import img3 from '../../../assets/img3.png';
import img10 from '../../../assets/img10.png';
import img11 from '../../../assets/img11.png';
import img13 from '../../../assets/img13.png';
import img14 from '../../../assets/img14.png';
import img2 from '../../../assets/img2.png';
import img15 from '../../../assets/img15.png';
import img9 from '../../../assets/img9.png';
import img8 from '../../../assets/img6.png';


const List = () => {
  const people = [
    {
      name: "Erv",
      progress: '100',
      referrals: 20,
      image: img4,
      stack: 'React'
    },
    {
      name: "Che",
      progress: '100',
      referrals: 11,
      image: img6,
      stack: 'BASIC'
    },
    {
      name: "Nicho",
      progress: '13',
      referrals: 0,
      image: img10,
      stack: 'React'
    },
    {
      name: "Glen",
      progress: '10',
      referrals: 3,
      image: img11,
      stack: 'PHP'
    },
    {
      name: "Lena",
      progress: '100',
      referrals: 25,
      image: img9,
      stack: 'C++'
    },
    {
      name: "John",
      progress: '81',
      referrals: 15,
      image: img13,
      stack: 'FORTRAN'
    },
    {
      name: "Ororo",
      progress: '22',
      referrals: 7,
      image: img14,
      stack: 'C#'
    },
    {
      name: "Lebs",
      progress: '100',
      referrals: 18,
      image: img3,
      stack: 'Angular'
    },
    {
      name: "Jadon",
      progress: '53',
      referrals: 17,
      image: img15,
      stack: 'Python'
    },
    {
      name: "Bauch",
      progress: '100',
      referrals: 21,
      image: img8,
      stack: 'Python'
    },
    {
      name: "Usain",
      progress: '61',
      referrals: 2,
      image: img2,
      stack: 'Django'
    },
  ];

  const [search, setSearch] = useState('');
  const [students, setStudents] = useState(people);


  const uponTyping = (event) => {
    setSearch(event.target.value);
  }

  const filteredStudents = students.filter(student => {
    return student.name.toLowerCase().includes(search.trim().toLowerCase());
  })

  const filterStudentsReferrals = () => {
    let element = document.getElementById('last-seen');
    if (element.checked === true) {
      const newItem = filteredStudents.filter(student => {
        return student.referrals > 15;
      })
      setStudents(newItem);
    } else {
      setStudents(people);
    }
  }

  const toggleStudents = () => {
    const sortedStudents = students.slice().reverse();
    setStudents(sortedStudents);
  }

  return (
    <div className='list'>
      <Navbar />
      <Search filterStudentsReferrals={filterStudentsReferrals} uponTyping={uponTyping} />
      <People toggleStudents={toggleStudents} filteredStudents={filteredStudents} />
    </div>
  );
}

export default List;