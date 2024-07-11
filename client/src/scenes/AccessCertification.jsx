import Header from "@/components/Header";
import { useGetAccessReviewQuery } from "@/state/api";
import { Box, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, useTheme, styled } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.background.alt,
  color: theme.palette.secondary[100],
  borderBottom: "none",
}));

function AccessCertification() {
  const theme = useTheme();
  const { data, isLoading } = useGetAccessReviewQuery();

  return (
    <Box height="100%" maxHeight="90vh" p="1.5rem 2.5rem" overflowX="auto">
      <Header title="Access Certification" subtitle="List of Users" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Access Review Id</StyledTableCell>
              <StyledTableCell>Review Type</StyledTableCell>
              <StyledTableCell>Resource Display Name</StyledTableCell>
              <StyledTableCell>Resource Id</StyledTableCell>
              <StyledTableCell>Review Name</StyledTableCell>
              <StyledTableCell>Created Date Time</StyledTableCell>
              <StyledTableCell>Review Start Date</StyledTableCell>
              <StyledTableCell>Review End Date</StyledTableCell>
              <StyledTableCell>Review Status</StyledTableCell>
              <StyledTableCell>Owner Id</StyledTableCell>
              <StyledTableCell>Owner Name</StyledTableCell>
              <StyledTableCell>Owner Upn</StyledTableCell>
              <StyledTableCell>Principal Id</StyledTableCell>
              <StyledTableCell>Principal Name</StyledTableCell>
              <StyledTableCell>Principal UPN</StyledTableCell>
              <StyledTableCell>Review Date</StyledTableCell>
              <StyledTableCell>Review Result</StyledTableCell>
              <StyledTableCell>Justification</StyledTableCell>
              <StyledTableCell>Reviewer Id</StyledTableCell>
              <StyledTableCell>Reviewer Name</StyledTableCell>
              <StyledTableCell>Reviewer UPN</StyledTableCell>
              <StyledTableCell>Reviewer Email Address</StyledTableCell>
              <StyledTableCell>Applied By Name</StyledTableCell>
              <StyledTableCell>Applied By UPN</StyledTableCell>
              <StyledTableCell>Applied By Email Address</StyledTableCell>
              <StyledTableCell>Applied Date</StyledTableCell>
              <StyledTableCell>Access Recommendation</StyledTableCell>
              <StyledTableCell>Submission Result</StyledTableCell>
              <StyledTableCell>Principal Type</StyledTableCell>
              <StyledTableCell>Access Review Series Id</StyledTableCell>
              <StyledTableCell>Stage</StyledTableCell>
              <StyledTableCell>Total Stages</StyledTableCell>
              <StyledTableCell>Last Multi Stage Decision</StyledTableCell>
              <StyledTableCell>Last Sign-in Date</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <StyledTableCell colSpan={35} align="center">Loading...</StyledTableCell>
              </TableRow>
            ) : (
              data.map((row) => (
                <TableRow key={row._id}>
                  <StyledTableCell>{row["Access Review Id"]}</StyledTableCell>
                  <StyledTableCell>{row["Review Type"]}</StyledTableCell>
                  <StyledTableCell>{row["Resource Display Name"]}</StyledTableCell>
                  <StyledTableCell>{row["Resource Id"]}</StyledTableCell>
                  <StyledTableCell>{row["Review Name"]}</StyledTableCell>
                  <StyledTableCell>{row["Created Date Time"]}</StyledTableCell>
                  <StyledTableCell>{row["Review Start Date"]}</StyledTableCell>
                  <StyledTableCell>{row["Review End Date"]}</StyledTableCell>
                  <StyledTableCell>{row["Review Status"]}</StyledTableCell>
                  <StyledTableCell>{row["Owner Id"]}</StyledTableCell>
                  <StyledTableCell>{row["Owner Name"]}</StyledTableCell>
                  <StyledTableCell>{row["Owner Upn"]}</StyledTableCell>
                  <StyledTableCell>{row["Principal Id"]}</StyledTableCell>
                  <StyledTableCell>{row["Principal Name"]}</StyledTableCell>
                  <StyledTableCell>{row["Principal UPN"]}</StyledTableCell>
                  <StyledTableCell>{row["Review Date"]}</StyledTableCell>
                  <StyledTableCell>{row["Review Result"]}</StyledTableCell>
                  <StyledTableCell>{row["Justification"]}</StyledTableCell>
                  <StyledTableCell>{row["Reviewer Id"]}</StyledTableCell>
                  <StyledTableCell>{row["Reviewer Name"]}</StyledTableCell>
                  <StyledTableCell>{row["Reviewer UPN"]}</StyledTableCell>
                  <StyledTableCell>{row["Reviewer Email Address"]}</StyledTableCell>
                  <StyledTableCell>{row["Applied By Name"]}</StyledTableCell>
                  <StyledTableCell>{row["Applied By UPN"]}</StyledTableCell>
                  <StyledTableCell>{row["Applied By Email Address"]}</StyledTableCell>
                  <StyledTableCell>{row["Applied Date"]}</StyledTableCell>
                  <StyledTableCell>{row["Access Recommendation"]}</StyledTableCell>
                  <StyledTableCell>{row["Submission Result"]}</StyledTableCell>
                  <StyledTableCell>{row["Principal Type"]}</StyledTableCell>
                  <StyledTableCell>{row["Access Review Series Id"]}</StyledTableCell>
                  <StyledTableCell>{row["Stage"]}</StyledTableCell>
                  <StyledTableCell>{row["Total Stages"]}</StyledTableCell>
                  <StyledTableCell>{row["Last Multi Stage Decision"]}</StyledTableCell>
                  <StyledTableCell>{row["Last Sign-in Date"]}</StyledTableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default AccessCertification;
