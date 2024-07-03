/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import Header from "@/components/Header";
import { useGetEmpDetailsQuery } from "@/state/api";

function Employee({
  id,
  jobTitle,
  displayName,
  surname,
  appnames,
  roles
}) {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {jobTitle}
        </Typography>
        <Typography variant="h5" component="div">
          {displayName}
        </Typography>
        <Typography variant="body2">{surname}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{
          color: theme.palette.neutral[300],
        }}
      >
        <CardContent>
          <Typography>id: {id}</Typography>
          <Typography>App Names: {appnames}</Typography>
          <Typography>
            Roles: {roles}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

function Employees() {
  const { data, isLoading } = useGetEmpDetailsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

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
      <Header title="EMPLOYEES" subtitle="See your list of Employees." />

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        justifyContent="space-between"
        rowGap="20px"
        columnGap="1.33%"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        {data.map(
          ({
            id,
            jobTitle,
            displayName,
            surname,
            appnames,
            roles
          }) => (
            <Employee
              key={id}
              id={id}
              jobTitle={jobTitle}
              displayName={displayName}
              surname={surname}
              appnames={appnames}
              roles={roles}
            />
          )
        )}
      </Box>
    </Box>
  );
}

export default Employees;
