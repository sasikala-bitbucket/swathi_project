import Header from "@/components/Header";
import { useGetSwiggyAppRoleDetailsQuery } from "@/state/api";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function SwiggyAppRoleDetails() {
  const theme = useTheme();
  const { data, isLoading } = useGetSwiggyAppRoleDetailsQuery();

  const columns = [
    {
      field: "full_name",
      headerName: "NAME",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.5,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
      valueGetter: (params) => {
        return params.row.role.name; 
      },
    },{
      field: "profile",
      headerName: "Profile",
      flex: 0.5,
      valueGetter: (params) => {
        return params.row.profile.name; 
      },
    },
  ];

  return (
    <Box height="100%" maxHeight="90vh" p="1.5rem 2.5rem">
      <Header title="Swiggy Details" subtitle="List of Users" />
      <Box
        mt="40px"
        height="72vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data || []}
          columns={columns}
        />
      </Box>
    </Box>
  );
}

export default SwiggyAppRoleDetails;
