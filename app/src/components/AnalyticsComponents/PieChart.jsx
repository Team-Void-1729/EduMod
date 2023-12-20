import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './BarChart.css';
const PieChart = ({ data }) => {
  useEffect(() => {
    if (data.length > 0) {
      const ctx = document.getElementById('pie-chart');

      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: data.map((item) => item.label),
          datasets: [
            {
              label: 'Analytics Data',
              data: data.map((item) => item.value),
              backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, [data]);

  return (
    <div className="chart-container">
      <canvas id="pie-chart" />
    </div>
  );
};

export default PieChart;
