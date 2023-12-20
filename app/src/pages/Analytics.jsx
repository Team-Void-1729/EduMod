import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BarChart from '../components/AnalyticsComponents/BarChart';
import LineChart from '../components/AnalyticsComponents/LineChart';
import PieChart from '../components/AnalyticsComponents/PieChart';
import '../css/Analytics.css';
const Analytics = () => {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.get('your-backend-endpoint-for-analytics');
    //       setData(response.data);
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
  
    //Render chart.js components based on 'data' fetched :
    // Dummy data for testing
    const barChartData = [
      { label: 'Category 1', value: 20 },
      { label: 'Category 2', value: 50 },
      { label: 'Category 3', value: 15 },
      { label: 'Category 4', value: 35 },
      { label: 'Category 4', value: 35 },
      { label: 'Category 4', value: 5},
    ];
  
    const lineChartData = [
      { label: 'January', value: 50 },
      { label: 'February', value: 80 },
      { label: 'March', value: 60 },
      { label: 'April', value: 90 },
      { label: 'May', value: 75 },
      { label: 'June', value: 85 },
    ];
  
    const pieChartData = [
      { label: 'Category A', value: 25 },
      { label: 'Category B', value: 40 },
      { label: 'Category C', value: 15 },
      { label: 'Category D', value: 20 },
    ];
    return (
      <div >
        <h1>Analytics Dashboard</h1>
        <div className='AnalyticsMain'>
          <BarChart data={barChartData}/>
          <PieChart data={pieChartData}/>
          <LineChart data={lineChartData}/>
        </div>
      </div>
    );
  };
export default Analytics
