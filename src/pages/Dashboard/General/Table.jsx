import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(name, productName) {
  return { name, productName };
}

const rows = [
  createData("Aditya Bhardwaj", "Paracetamol Tablets-200mg"),
  createData("Aditya Bhardwaj", "Paracetamol Tablets-200mg"),
  createData("Aditya Bhardwaj", "Paracetamol Tablets-200mg"),
  createData("Aditya Bhardwaj", "Paracetamol Tablets-200mg"),
  createData("Aditya Bhardwaj", "Paracetamol Tablets-200mg"),
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Product Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.productName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
