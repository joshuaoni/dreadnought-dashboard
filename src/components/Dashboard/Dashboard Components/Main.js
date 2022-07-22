import React from 'react';
import StudentProgress from "./StudentProgress";
import Navbar from "./Navbar";
import SiteVisits from "./SiteVisits";
import EnrolledStudents from "./EnrolledStudents";
import Submitted from "./Submitted";

export default function Main() {

  return (
    <div className="main">
      <Navbar />
      <div className="grid">
        <div className="row">
          <SiteVisits />
          <StudentProgress />
        </div>
        <div className="row2">
          <EnrolledStudents />
          <Submitted />
        </div>
      </div>
    </div>
  );
}


