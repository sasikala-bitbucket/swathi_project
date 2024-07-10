import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { useGetEntitlementDataQuery, useGetUserProvisioningDataQuery } from '@/state/api';
import { Box, Typography } from '@mui/material';

const UserProvisioning = () => {
  const { data, isLoading } = useGetUserProvisioningDataQuery();
  const [chartInstance, setChartInstance] = useState(null); // State to hold the chart instance

  useEffect(() => {
    if (data) {
      const actionCounts = {};
      data.forEach(item => {
        if (actionCounts[item.provisioningAction]) {
          actionCounts[item.provisioningAction] += 1;
        } else {
          actionCounts[item.provisioningAction] = 1;
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
        type: 'bar',
        data: {
          labels: chartLabels,
          datasets: [{
            label: 'Number of Users',
            data: chartData,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
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
    <Box m="1.5rem" maxWidth="80%">
      <Typography variant="h6" mb="1rem">Provisioning Action Distribution</Typography>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <canvas id="provisioning-action-chart" /> // Chart canvas element
      )}
    </Box>
  );
};

export default UserProvisioning;
