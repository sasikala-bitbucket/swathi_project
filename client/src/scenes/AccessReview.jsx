import React, { useState } from 'react';
import BreakdownChart from "@/components/BreakdownChart";
import FlexBetween from "@/components/FlexBetween";
import Header from "@/components/Header";
import OverviewChart from "@/components/OverviewChart";
import StatBox from "@/components/StatBox";
import { useGetDashboardQuery } from "@/state/api";
import { useNavigate } from 'react-router-dom';
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { DataGrid } from "@mui/x-data-grid";
import ZohoAppRoleDetails from "./ZohoAppRoleDetails";
import ZomatoAppRoleDetails from "./ZomatoAppRoleDetails";

function AccessReview() {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetDashboardQuery();
  const navigate = useNavigate();
  const [selectedApp, setSelectedApp] = useState(null);
  
  const handleStatBoxClick = (value) => {
    const result = value.toLowerCase();
    navigate(`/${result}`);
    setSelectedApp(value);
  };

  
  if (!data || isLoading)
    return (
      <Box
        width="100%"
        height="100%"
        minHeight="80vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <CircularProgress color="secondary" />
      </Box>
    );

  return (
    <Box m="1.5rem 2.5rem">
    <FlexBetween>
      <Header title="Access Review" subtitle="List of applications" />
    </FlexBetween>

    <Box
      mt="20px"
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="160px"
      gap="20px"
      sx={{
        "& > div": { gridColumn: isNonMediumScreens ? "span 3":"span 6" },
      }}
    >
      <StatBox
        title="Employee Count"
        value="ZohoBigin"
        increase="Employees :-"
        description={data && data.zohoCount}
        onClick={handleStatBoxClick}
        icon={
          <PersonAdd
            sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
          />
        }
      />
           
      <StatBox
        title="Employee Count"
        value="Sharepoint"
        increase="Employees :-"
        description={data && data.metaCount}
        onClick={handleStatBoxClick}
        icon={
          <PersonAdd
            sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
          />
        }
      />    
    </Box>
  </Box>
  );
}

export default AccessReview;
