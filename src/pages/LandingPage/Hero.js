import { Stack, Typography, Container, Button, Box } from "@mui/material";
import dummy from "../../assets/images/dummy.png";
import CheckIcon from "@mui/icons-material/Check";

const Hero = ({ title, text, button, reverse = false }) => {
  return (
    <Container sx={{ my: 6 }}>
      <Stack
        spacing={4}
        justifyContent="space-around"
        direction={{ sm: reverse ? "row-reverse" : "row", xs: "column" }}
        alignItems="center"
      >
        <Stack sx={{ maxWidth: 600 }}>
          <Typography variant="h2" sx={{ fontWeight: 700 }} gutterBottom>
            {title}
          </Typography>
          <Typography sx={{ alignItems: "center" }} variant="h6" gutterBottom>
            {text}
          </Typography>
          <Typography>
            <CheckIcon />
            {` `}New products added every month
          </Typography>
          <Typography>
            <CheckIcon />
            {` `}GMP Approved factories
          </Typography>
          <Typography>
            <CheckIcon />
            {` `}CTD DOssaries
          </Typography>
          <Typography gutterBottom>
            <CheckIcon />
            {` `}All therapy areas
          </Typography>
          <Button sx={{ maxWidth: 230, my: 2 }} variant="contained">
            {button}
          </Button>
        </Stack>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <img src={dummy} height="250px" alt="dummy" />
        </Box>
      </Stack>
    </Container>
  );
};

export default Hero;
