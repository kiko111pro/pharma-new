import * as React from "react";
import Box from "@mui/material/Box";
import {
  Stack,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  OutlinedInput,
  InputLabel,
  Button,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "98%",
  maxWidth: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, handleClose, isLogin }) {
  const [value, setValue] = React.useState("Company");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack spacing={1}>
            <Stack justifyContent="space-between" direction="row">
              <Typography variant="h4">
                {isLogin ? "Sign In" : "Sign Up"}
              </Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={value}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Company"
                    control={<Radio />}
                    label="Company"
                  />
                  <FormControlLabel
                    value="Invidual"
                    control={<Radio />}
                    label="Invidual"
                  />
                </RadioGroup>
              </FormControl>
            </Stack>
            {isLogin || (
              <>
                <InputLabel>Full Name</InputLabel>
                <OutlinedInput fullWidth />
              </>
            )}
            <InputLabel>Enter Email</InputLabel>
            <OutlinedInput fullWidth />
            {isLogin || (
              <>
                <InputLabel>Enter Phone Number </InputLabel>
                <OutlinedInput fullWidth />
              </>
            )}
            <InputLabel>Enter Password</InputLabel>
            <OutlinedInput fullWidth />
            <Button variant="contained">
              {isLogin ? "Sign In" : "Create Account"}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
