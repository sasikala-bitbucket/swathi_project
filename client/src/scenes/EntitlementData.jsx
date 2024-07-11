import Header from "@/components/Header";
import { useGetEntitlementDataQuery } from "@/state/api";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function EntitlementData() {
  const theme = useTheme();
  const { data, isLoading } = useGetEntitlementDataQuery();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "displayName",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "description",
      headerName: "Description",
      flex: 0.5,
   },{
      field: "isHidden",
      headerName: "Hidden Flag",
      flex: 0.5,
    },
    {
        field: "createdDateTime",
        headerName: "Created on",
        flex: 0.5,
     },{
        field: "modifiedDateTime",
        headerName: "Modified On",
        flex: 0.5,
      },
  ];

  return (
    <Box height="100%" maxHeight="90vh" p="1.5rem 2.5rem">
      <Header title="Entitlement Management " subtitle="List of Users" />
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

export default EntitlementData;
