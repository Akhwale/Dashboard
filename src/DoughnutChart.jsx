import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(ArcElement, Tooltip, Legend);


const options = {
  
  aspectRatio: 2,
  responsive:true,
  
  plugins: {
    legend: {
      display: true,
      position: 'right',
      align: 'center', // This aligns the legend itself
      labels: {

        fontSize: 14,
        fontStyle: 'normal',
        fontFamily: 'Arial',
        padding: 10,
      },
    },
    title: {
      display: false,
      text: 'Representation Per Country',
      padding: {
        top: 10,
        bottom: 15,
      },
      font: {
        size: 14,
        weight: 'bold',
      },
    },
  },
}



export function DoughnutChart() {

  const [chartData, setChartData] = useState({});

  useEffect(()=>{
    const fetchData = async() =>{
      try{

        const results = await axios.get("http://localhost:5000/piechart-1");
        
        const countries = results.data.piedata.map(item => item.country);
        const stats = results.data.piedata.map(item => item.count);
        console.log(stats);
        console.log(countries);
        
        setChartData({
          labels: countries,
  datasets: [
    {
      label: '# of AirBnbs',
      data: stats,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
        }

        )

      }
      catch(error){
        console.log("This is an error");
      }

    }
    fetchData();
  },[]);


 
  return (
    <div style={{  padding: '0', position:'center'}}>
      {chartData.labels && chartData.datasets ? (
        <Doughnut data={chartData} options={options} style={{  padding:'0', alignItems:'center'}}/>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  
}
