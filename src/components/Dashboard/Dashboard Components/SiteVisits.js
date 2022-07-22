import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, } from "recharts";
import woman from "../../../assets/woman.png";
import man from "../../../assets/man.png";

export default function SiteVisits() {
  const data = [
    {
      visits: 678,
    },
    {
      visits: 668,
    },
    {
      visits: 650,
    },
    {
      visits: 630,
    },
    {
      visits: 590,
    },
    {
      visits: 570,
    },
    {
      visits: 550,
    },
    {
      visits: 530,
    },
    {
      visits: 510,
    },
    {
      visits: 509,
    },
    {
      visits: 530,
    },
    { visits: 450 },
    {
      visits: 500,
    },
    {
      visits: 470,
    },
    {
      visits: 440,
    },
    {
      visits: 480,
    },
    {
      visits: 530,
    },
    {
      visits: 580,
    },
    {
      visits: 600,
    },
    {
      visits: 630,
    },
    {
      visits: 658,
    },
    {
      visits: 650,
    },
    {
      visits: 630,
    },
    {
      visits: 650,
    },
    {
      visits: 670,
    },
    {
      visits: 700,
    },
    {
      visits: 730,
    },
    {
      visits: 750,
    },
    {
      visits: 770,
    },
    {
      visits: 809,
    },
    {
      visits: 819,
    },
    {
      visits: 799,
    },
    {
      visits: 580,
    },
    {
      visits: 600,
    },
    {
      visits: 630,
    },
    {
      visits: 678,
    },

    {
      visits: 770,
    },
    {
      visits: 750,
    },
    {
      visits: 730,
    },
    {
      visits: 700,
    },
    {
      visits: 670,
    },
    {
      visits: 650,
    },
    {
      visits: 630,
    },
    {
      visits: 650,
    },
    {
      visits: 678,
    },
    {
      visits: 630,
    },
    {
      visits: 600,
    },
    {
      visits: 580,
    },

    {
      visits: 549,
    },
    {
      visits: 600,
    },
    {
      visits: 800,
    },
  ];
  const sliderData = [
    {
      image: man,
      serviceName: "",
    },
    {
      image: woman,
      serviceName: "",
    },
  ];

  return (
    <div className='site-visits card-style'>
      <div className='title-cont'>
        <div className='title'>
          <h4>Dreadnought Site Visits - Past 50 Days</h4>
          <h1>30,210</h1>
        </div>
        <div className='slider'>
          <div className='services'>
            {sliderData.map(({ image, serviceName }) => {
              return (
                <div className='service' key={serviceName}>
                  <img alt='' src={image} />
                  <h6>{serviceName}</h6>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='chart'>
        <ResponsiveContainer height='100%' width='100%'>
          <AreaChart data={data}>
            <defs>
              <linearGradient id='colorview' x1='0' y1='0' x2='0' y2='1'>
                <stop
                  offset='10%'
                  stopColor='#1c174c'
                  stopOpacity={0.4}
                ></stop>
                <stop
                  offset='100%'
                  stopColor='#000000ff'
                  stopOpacity={0}
                ></stop>
              </linearGradient>
            </defs>
            <Tooltip />
            <Area
              type='monotone'
              dataKey='visits'
              stroke='#1c174c'
              strokeWidth={2}
              fill='url(#colorview)'
              animationBegin={800}
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
