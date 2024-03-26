import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import randomColor from 'randomcolor';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export function VerticalBar2() {
  const [barData, setBarData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await axios.get("http://localhost:5000/proptype");

        const accomodates = results.data.accom.map(item => item.accommodates);
        const stats = results.data.accom.map(item => item.count);

        
        console.log(accommodates);
        console.log(stats);

        setBarData({
          labels: accommodates,  // Use propType for labels
          datasets: [
            {
              data: stats,
              backgroundColor: randomColor({ count: property.length, format: 'rgba' }),
            },
          ],
        });
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Add an empty dependency array to run the effect only once

  return (
    <div>
      {barData.labels && barData.datasets ? (
        <Bar data={barData} options={options} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
