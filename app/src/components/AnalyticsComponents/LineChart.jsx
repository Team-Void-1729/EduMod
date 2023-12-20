import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import './BarChart.css';
const LineChart = ({ data }) => {
  useEffect(() => {
    if (data.length > 0) {
      const ctx = document.getElementById('line-chart');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.map((item) => item.label),
          datasets: [
            {
              label: 'Analytics Data',
              data: data.map((item) => item.value),
              fill: false,
              borderColor: 'rgba(75, 192, 192, 1)',
              tension: 0.1,
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
      <canvas id="line-chart" />
    </div>
  );
};

export default LineChart;
