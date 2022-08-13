import React from "react";
import {
  Container,
  Stack,
  Typography,
  Box,
  Paper,
  ButtonBase,
} from "@mui/material";
import dummy from "../../assets/images/dummy.png";
import { colors } from "../../mui_theme/theme";
import { useNavigate } from "react-router-dom";

function Trending({ showInfo = false, title }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if (showInfo) {
      navigate("/product");
    } else {
      navigate("/company");
    }
  };
  return (
    <Container>
      <Stack sx={{ mt: 4 }}>
        <Typography variant="h3" color="primary" textAlign="center">
          <strong>{title}</strong>
        </Typography>
        <Stack
          sx={{
            my: 2,
            overflow: "scroll",
            gap: 2,
            mx: { md: "auto" },
            "&::-webkit-scrollbar": {
              width: 0,
            },
          }}
          spacing={2}
          direction={"row"}
          // justifyContent={{ md: "center", xs:"non" }}
        >
          <Paper
            sx={{
              maxWidth: 230,
              minHeight: 213,
            }}
            variant="outlined"
          >
            <Stack>
              <Box sx={{ p: 2 }}>
                <ButtonBase onClick={handleNavigate}>
                  <img src={dummy} className="trending__image" alt="dummy" />
                </ButtonBase>
              </Box>
              {showInfo && (
                <Stack
                  sx={{
                    bgcolor: colors.primary,
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#fff" }}>
                    Paracetamol
                  </Typography>
                  <Typography sx={{ color: "#fff" }} variant="subtitile2">
                    Zydes
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Paper>
          <Paper
            sx={{
              maxWidth: 230,
              minHeight: 213,
              // overflow: "hidden",
            }}
            variant="outlined"
          >
            <Stack>
              <Box sx={{ p: 2 }}>
                <ButtonBase onClick={handleNavigate}>
                  <img src={dummy} className="trending__image" alt="dummy" />
                </ButtonBase>
              </Box>
              {showInfo && (
                <Stack
                  sx={{
                    bgcolor: colors.primary,
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#fff" }}>
                    Paracetamol
                  </Typography>
                  <Typography sx={{ color: "#fff" }} variant="subtitile2">
                    Zydes
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Paper>
          <Paper
            sx={{
              maxWidth: 230,
              minHeight: 213,
              // overflow: "hidden",
            }}
            variant="outlined"
          >
            <Stack>
              <Box sx={{ p: 2 }}>
                <ButtonBase onClick={handleNavigate}>
                  <img src={dummy} className="trending__image" alt="dummy" />
                </ButtonBase>
              </Box>
              {showInfo && (
                <Stack
                  sx={{
                    bgcolor: colors.primary,
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#fff" }}>
                    Paracetamol
                  </Typography>
                  <Typography sx={{ color: "#fff" }} variant="subtitile2">
                    Zydes
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Paper>
          <Paper
            sx={{
              maxWidth: 230,
              minHeight: 213,
              // overflow: "hidden",
            }}
            variant="outlined"
          >
            <Stack>
              <Box sx={{ p: 2 }}>
                <ButtonBase onClick={handleNavigate}>
                  <img src={dummy} className="trending__image" alt="dummy" />
                </ButtonBase>
              </Box>
              {showInfo && (
                <Stack
                  sx={{
                    bgcolor: colors.primary,
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <Typography variant="h5" sx={{ color: "#fff" }}>
                    Paracetamol
                  </Typography>
                  <Typography sx={{ color: "#fff" }} variant="subtitile2">
                    Zydes
                  </Typography>
                </Stack>
              )}
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Trending;
