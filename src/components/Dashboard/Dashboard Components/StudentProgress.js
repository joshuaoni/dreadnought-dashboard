import React from 'react';

export default function StudentProgress() {
  const studentProgressData = [
    {
      progress: 45,
      amount: '45%',
      task: 'Website building'
    },
    {
      progress: 100,
      amount: '100%',
      task: 'Social Media'
    },
    {
      progress: 65,
      amount: '65%',
      task: 'AWS'
    },
    {
      progress: 87,
      amount: '87%',
      task: 'GCP'
    },
  ];
  return (
    <div className='studentProgress card-style'>
      <div className="title-cont">
        <div className="title">
          <h4 className='mb2'>Students' Task Completion Average</h4>
          <h1>74%</h1>
        </div>
      </div>
      <div className="progressed">
        {studentProgressData.map(({ progress, amount, task }) => {
          return (
            <div className="progressing" key={amount}>
              <div className="data">
                <h5>{task}</h5>
                <h5>{amount}</h5>
              </div>
              <progress
                max={100}
                value={progress}
                className={progress === 100 ? "cleared" : ""}
              />
            </div>
          );
        })}

      </div>
    </div>
  );
}

