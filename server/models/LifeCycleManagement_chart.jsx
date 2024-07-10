import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { useGetLifecycleDataQuery, useGetUserProvisioningDataQuery } from '@/state/api';
import { Box, Typography } from '@mui/material';

const LifeCycleManagement = () => {
  const { data, isLoading } = useGetLifecycleDataQuery();
  const [chartInstance, setChartInstance] = useState(null); // State to hold the chart instance

  useEffect(() => {
    if (data) {
      const actionCounts = {};
      data.forEach(item => {
        if (actionCounts[item.category]) {
          actionCounts[item.category] += 1;
        } else {
          actionCounts[item.category] = 1;
        }
      });

      const chartLabels = Object.keys(actionCounts);
      const chartData = Object.values(actionCounts);

      // Check if chartInstance exists and destroy it before rendering new chart
      if (chartInstance) {
        chartInstance.destroy();
      }

      // Render new chart
      const newChartInstance = new Chart(document.getElementById('provisioning-action-chart'), {
        type: 'line', // Use 'line' type for line chart
        data: {
          labels: chartLabels,
          datasets: [{
            label: 'Number of Users',
            data: chartData,
            fill: false, // Set fill to false for line chart
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          }]
        },
        options: {
          scales: {
            x: {
              type: 'category', // Ensure x-axis type is set to 'category'
              labels: chartLabels,
            },
            y: {
              beginAtZero: true,
              min: 0,
              title: {
                display: true,
                text: 'Number of Users',
              },
            },
          },
        }
      });

      setChartInstance(newChartInstance); // Save new chart instance to state
    }
  }, [data]);

  return (
    <Box m="1.5rem">
      <Typography variant="h6" mb="1rem">Provisioning Action Distribution</Typography>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <canvas id="provisioning-action-chart" /> // Chart canvas element
      )}
    </Box>
  );
};

export default LifeCycleManagement;
