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

function createData(name, phone, productName, message, lastDate) {
  return { name, phone, productName, message, lastDate };
}

const rows = [
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap",
    "21/06/2022( Monday)"
  ),
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap",
    "21/06/2022( Monday)"
  ),
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap",
    "21/06/2022( Monday)"
  ),
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap",
    "21/06/2022( Monday)"
  ),
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap",
    "21/06/2022( Monday)"
  ),
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap",
    "21/06/2022( Monday)"
  ),
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap",
    "21/06/2022( Monday)"
  ),
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap",
    "21/06/2022( Monday)"
  ),
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap",
    "21/06/2022( Monday)"
  ),
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap",
    "21/06/2022( Monday)"
  ),
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap",
    "21/06/2022( Monday)"
  ),
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap ",
    "21/06/2022( Monday)"
  ),
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap",
    "21/06/2022( Monday)"
  ),
  createData(
    "Aditya Bhardwaj",
    "+91-9910189777",
    "Cipla Paracetamol 10 tablets",
    "Want 100 boxes of cipla paracetamol delivered to Surat Gujrat asap",
    "21/06/2022( Monday)"
  ),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ fontWeight: 700 }}>Name</StyledTableCell>
            <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
              Phone No.
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
              Lead Product Name
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
              Lead Message
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ fontWeight: 700 }}>
              Last Received Date
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.phone}</StyledTableCell>
              <StyledTableCell align="center">
                {row.productName}
              </StyledTableCell>
              <StyledTableCell align="center">{row.message}</StyledTableCell>
              <StyledTableCell align="center">{row.lastDate}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
