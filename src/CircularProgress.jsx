import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

export const data = {
  labels: ['Yes'],
  datasets: [
    {
      label: 'Poll',
      data: [90],
      backgroundColor: ['Blue'],
      borderColor: ['Red'],
      borderWidth: 0,
      circumference: (90 / 100) * 360, // Calculate the circumference based on the percentage
    },
  ],
};

const CenteredText = ({ text }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
      }}
    >
      <span style={{ fontSize: '20px', color: 'black' }}>{text}</span>
    </div>
  );
};

export function CircularProgressBar() {
  const [displayedPercentage, setDisplayedPercentage] = useState(0);
  const actualPercentage = data.datasets[0].data[0];

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      counter++;
      if (counter > actualPercentage) {
        clearInterval(interval);
      } else {
        setDisplayedPercentage(counter);
      }
    }, 20); // Adjust the interval speed if needed

    return () => clearInterval(interval);
  }, [actualPercentage]);

  const circumference = (displayedPercentage / 100) * 360;

  const dynamicData = {
    ...data,
    datasets: [
      {
        ...data.datasets[0],
        circumference: circumference,
      },
    ],
  };

  return (
    <div style={{ position: 'relative', width: '150px', height: '150px' }}>
      <Doughnut data={dynamicData} />
      <CenteredText text={`${displayedPercentage}%`} />
    </div>
  );
}
