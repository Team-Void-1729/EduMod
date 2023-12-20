import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './BarChart.css';
const BarChart = ({ data }) => {
  useEffect(() => {
    if (data.length > 0) {
      const ctx = document.getElementById('bar-chart');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.map((item) => item.label),
          datasets: [
            {
              label: 'Analytics Data',
              data: data.map((item) => item.value),
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data]);

  return (
    <div className="chart-container">
      <canvas id="bar-chart" />
    </div>
  );
};

export default BarChart;
