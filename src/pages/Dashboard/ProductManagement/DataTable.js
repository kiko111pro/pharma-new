import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import { Switch, Button, IconButton, Box } from "@mui/material";
import { dummy } from "../../../assets/images";

function createData(name, date) {
  return { name, date };
}

const rows = [
  createData("Cipla Paracetamol 10 tablets", "21/06/2022( Monday)"),
  createData("Cipla Paracetamol 10 tablets", "21/06/2022( Monday)"),
  createData("Cipla Paracetamol 10 tablets", "21/06/2022( Monday)"),
  createData("Cipla Paracetamol 10 tablets", "21/06/2022( Monday)"),
  createData("Cipla Paracetamol 10 tablets", "21/06/2022( Monday)"),
];

export default function BasicTable() {
  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 650, overflow: "scroll" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <strong>Image</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Product Name</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Product addition date</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Show/Hide</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Enable/Disable</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                <Box
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                  }}
                >
                  <img src={dummy} style={{ maxHeight: 60 }} alt="img" />
                </Box>
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">
                <Switch />
              </TableCell>
              <TableCell align="center">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button variant="outlined">Edit</Button>
                  <IconButton>
                    <DeleteIcon color="primary" />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
