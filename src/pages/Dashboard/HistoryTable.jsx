import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    //   backgroundColor: theme.palette.common.black,
    //   color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id, transaction, amount, date) {
  return { id, transaction, amount, date };
}

const rows = [
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
  createData(
    "121098DHA67SA",
    "Aditya Bhardwaj",
    "₹ 10,9999 /-",
    "21/06/2022( Monday)"
  ),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ fontWeight: 700 }}>
              Transaction ID
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
              Transaction To/From
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
              Transaction Amount
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
              Transaction Date
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.transaction}
              </StyledTableCell>

              <StyledTableCell align="center">{row.amount}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
